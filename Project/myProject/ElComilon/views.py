from django.shortcuts import render,redirect, get_object_or_404
from django.http import HttpResponse
from django.http import JsonResponse
from django.contrib.auth.models import User,auth
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.shortcuts import redirect
from .models import Producto,Usuario,Genero


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
            usuario.save()
            return redirect('Login')
    else:
        return render(request, 'pages/Register.html')   

def user_login(request):
    if request.method == 'POST':
        email = request.POST['correoP']
        contraseña = request.POST['contraseña']
        user = authenticate(request,email=email, contraseña=contraseña)
        if user is not None:
            login(request,user)
            usuarios = Usuario.objects.all()
            context = {
                "usuarios":usuarios,
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

def detalleCompra(request):
    return render(request, 'pages/Detail.html')

def Profile(request):
    return render(request, 'pages/Profile.html')

def detailProduct(request,pk):
    plato = Producto.objects.get(id_producto=pk)
    context = {
        "plato":plato
    }
    return render(request, 'pages/DetailProduct.html',context)

def OrderTracking(request):
    return render(request, 'pages/OrderTracking.html')


def adminIndex(request):
    productos = Producto.objects.all()
    return render(request, 'pages/adminViews/AdminIndex.html', {'productos':productos})

def agregarPlato(request):
    if request.method == 'POST':
        nombre = request.POST['nombre']
        precio = request.POST['precio']
        descripcion = request.POST['descripcion']
        ingredientes = request.POST['ingredientes']
        imagen = request.POST['imagen']
        plato = Producto.objects.create(nombre = nombre, precio = precio, descripcion = descripcion, ingredientes = ingredientes, imagen = imagen)
        plato.save()
        return render(request, 'pages/adminViews/AgregarPlato.html')    
    else:
        return render(request, 'pages/adminViews/AgregarPlato.html')    
    

def crud(request):
    usuarios = Usuario.object.all()
    context = {
        "usuarios": usuarios,
    }
    return render(request, )

  
    
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
            'imagen': producto.imagen,
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