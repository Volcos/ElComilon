from django.shortcuts import render,redirect, get_object_or_404
from django.http import HttpResponse
from django.http import JsonResponse
from django.contrib.auth.models import User, auth
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.shortcuts import redirect
from .models import Producto,Usuario,Genero, Compra, DetalleCompra
from django.contrib.admin.views.decorators import staff_member_required
from django.utils import timezone
from django.conf import settings
import os

#------------------------------------------------------ IMPORTANTE ----------------------------------------------#
#datos de login de admin
#username: be.vargast@duocuc.cl
#contraseña: admin


# Create your views here.
def index(request):
    productos = Producto.objects.all()
    return render(request, 'pages/index.html', {'productos':productos})

def register(request):
    if request.method != 'POST':
        generos = Genero.objects.all()
        context = {
            "generos": generos,
        }
        return render(request, 'pages/Register.html', context)
    
    elif request.method == 'POST':
        nombre = request.POST['nombre']
        apellido = request.POST['apellido']
        email = request.POST.get('correoP', '')
        fecha_nacimiento = request.POST['fecnac']
        genero = request.POST['genero']
        telefono = request.POST['numtelef']
        region = request.POST['optRegion']
        comuna = request.POST['optComuna']
        direccion = request.POST['direccion']
        numero_direccion = request.POST['numDir']
        contraseña = request.POST.get('contraseña', '')
        objGenero = Genero.objects.get(id_genero=genero)

        if Usuario.objects.filter(email=email).exists():
            messages.info(request,'El correo ya existe')
            return redirect('Register')
        else:
            usuario = Usuario.objects.create(
                nombre = nombre,
                apellido = apellido,
                email = email,
                fecha_nacimiento = fecha_nacimiento,
                id_genero = objGenero,
                telefono = telefono,
                region = region,
                comuna = comuna,
                direccion = direccion,
                numero_direccion = numero_direccion,
                contraseña = contraseña
            )
            user = User.objects.create(
                username = email,
                email = email
            )
            user.set_password(contraseña)
            user.save()
            usuario.save()
            return redirect('Login')
        
    else:
        return render(request, 'pages/Register.html')   



def user_login(request):
    if request.method == 'POST':
        email = request.POST['correoP']
        contraseña = request.POST['contraseña']
        user = auth.authenticate(username=email, password=contraseña)
        if user is not None:
            auth.login(request,user)
            usuarios = Usuario.objects.all()
            productos = Producto.objects.all()
            for usuario in usuarios:
                if usuario.email == user.username:
                    dataUser = usuario
            context = {
                "usuarios":dataUser,
                'productos':productos,
                "user":user
            }
            return render(request,"pages/index.html",context)
        else:
            context = {
                "mensaje":"Usuario o contraseña incorrectos",
                "design":"alert alert-danger w-50 mx-auto text-center",
            }
            return render(request,"pages/Login.html",context)
    else:
        context = {
                                        
        }
        return render(request,"pages/Login.html",context)

def desconectar(request):   
    if request.user.is_authenticated:
        logout(request)
    
    context = {
        "mensaje":"Desconectado con exito",
        "design":"alert alert-success w-50 mx-auto text-center",
    }
    return render(request,"pages/Login.html",context)



def detalleCompra(request):
    return render(request, 'pages/Detail.html')


@login_required(login_url="Login")
def Profile(request):
    if request.user.is_authenticated:
        user = Usuario.objects.get(email=request.user.email)
        
        context = {
            "usuario":user,
        }
        
        return render(request, 'pages/Profile.html',context)
    else:
        return render(request,"pages/index.html")




def detailProduct(request,pk):

    plato = Producto.objects.get(id_producto=pk)
    context = {
        "plato":plato
    }
    return render(request, 'pages/DetailProduct.html',context)

def OrderTracking(request):
    return render(request, 'pages/OrderTracking.html')

@staff_member_required(login_url="Login")
def adminIndex(request):
    productos = Producto.objects.all()
    return render(request, 'pages/adminViews/AdminIndex.html', {'productos':productos})

@staff_member_required(login_url="Login")
def agregarPlato(request):
    if request.method == 'POST':
        nombre = request.POST['nombre']
        precio = request.POST['precio']
        descripcion = request.POST['descripcion']
        ingredientes = request.POST['ingredientes']
        if request.FILES['imagen']:
            imagen = request.FILES['imagen']
            plato = Producto.objects.create(nombre = nombre, precio = precio, descripcion = descripcion, ingredientes = ingredientes, imagen = imagen)
            plato.save()
            return render(request, 'pages/adminViews/AgregarPlato.html')    
    else:
        return render(request, 'pages/adminViews/AgregarPlato.html')    


@staff_member_required(login_url="Login")
def eliminarPlato(request,pk):
    try:
        plato = Producto.objects.get(id_producto=pk)
        plato.delete()
        platos = Producto.objects.all()
        context = {
            "mensaje":"Plato eliminado",
            "productos": platos
        }
        return render(request,'pages/index.html',context)
    except:
        context = {
            "mensaje":"Error al eliminar el plato"
        }
        return render(request,'pages/index.html',context)
    
@staff_member_required(login_url="Login")
def modificarPlato(request,pk):
    plato = get_object_or_404(Producto, id_producto=pk)
    
    if request.method == 'POST':
        nombre = request.POST['nombre']
        precio = request.POST['precio']
        descripcion = request.POST['descripcion']
        ingredientes = request.POST['ingredientes']
        
        plato.nombre = nombre
        plato.precio = precio
        plato.descripcion = descripcion
        plato.ingredientes = ingredientes
        
        if 'imagen' in request.FILES:
            imagen = request.FILES['imagen']
            plato.imagen = imagen
        plato.save()

       
        platos = Producto.objects.all()
        context = {
            "mensaje":"Plato eliminado",
            "productos": platos
        }
        return render(request, 'pages/index.html',context)    
    else:
        return render(request, 'pages/adminViews/modificarPlato.html')
    
@staff_member_required(login_url="Login")
def buscarPlatoEdit(request,pk):
    plato = Producto.objects.get(id_producto=pk)
    context = {
        "plato":plato
    }
    return render(request,'pages/adminViews/modificarPlato.html',context)

def agregar_al_carrito(request, producto_id):
    carrito = request.session.get('carrito', {})
    producto = get_object_or_404(Producto, id_producto=producto_id)
    if str(producto_id) in carrito:
        carrito[str(producto_id)]['cantidad'] += 1
    else:
        carrito[str(producto_id)] = {
            'nombre': producto.nombre,
            'precio': producto.precio,
            'descripcion': producto.descripcion,
            'ingredientes': producto.ingredientes,
            'imagen': producto.imagen.url,
            'cantidad': 1
        }
    request.session['carrito'] = carrito
    return redirect('ver_carrito')
    
def ver_carrito(request):
    carrito = request.session.get('carrito', {})
    return JsonResponse(carrito)

def eliminar_del_carrito(request, producto_id):
    carrito = request.session.get('carrito', {})
    if str(producto_id) in carrito:
        del carrito[str(producto_id)]
        request.session['carrito'] = carrito
    return JsonResponse({'success': True})

def guardarCompra(request):
    carrito = request.session.get('carrito', {})
    if request.user.username:
        email = request.user.email
        fecha = timezone.now()
        total_compra = 0
        for tmp in carrito.values():
            total_compra += tmp['precio'] * tmp['cantidad']
        compra = Compra.objects.create(
            correo_cliente=email,
            fecha_compra=fecha,
            total_compra=total_compra
        )
        for item in carrito.values():
            DetalleCompra.objects.create(
                id_compra=compra,
                producto=item['nombre'],
                cantidad=item['cantidad'],
                precio=item['precio']
            )
        request.session['carrito'] = {}
        return redirect('index')  
    else:
        return redirect('Login')

def get_profile_data(request):
    user = Usuario.objects.get(email=request.user.email)
    usuario = {
        "nombre": user.nombre,
        "apellido": user.apellido,
        "email": user.email,
        "fecha_nacimiento": user.fecha_nacimiento,
        "genero": user.id_genero.genero,
        "telefono": user.telefono,
        "region": user.region,
        "comuna": user.comuna,
        "direccion": user.direccion,
        "numero_direccion": user.numero_direccion,
        "contraseña": user.contraseña
    }

    return JsonResponse(usuario)

def get_order_data(request):
    compras = Compra.objects.get(correo_cliente=request.user.email)
    historial = {
        "id_compra": compras.id_compra,
        "correo_cliente": compras.correo_cliente,
        "fecha_compra": compras.fecha_compra,
        "total_compra": compras.total_compra

    }
    print(compras)
    return JsonResponse(historial)
def test(request):
    return render(request,'pages/test.html')
def compras(request):
    compras = Compra.objects.filter(correo_cliente= request.user.email).values('id_compra', 'correo_cliente', 'fecha_compra', 'total_compra')
    compras_list = list(compras)
    return JsonResponse(compras_list)