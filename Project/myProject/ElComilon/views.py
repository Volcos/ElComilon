from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User,auth
from django.contrib import messages
from django.shortcuts import redirect
from .models import Producto,Usuario,Genero,Region,Comuna


# Create your views here.
def index(request):
    productos = Producto.objects.all()
    return render(request, 'pages/index.html', {'productos':productos})

def register(request):
    if request == 'POST':
        nombre = request.POST['nombre']
        apellido = request.POST['apellido']
        email = request.POST['correoP']
        fecha_nacimiento = request.POST['fechaN']
        genero = request.POST['genero']
        telefono = request.POST['telefono']
        region = request.POST['optRegion']
        comuna = request.POST['optComuna']
        direccion = request.POST['direccion']
        numero_direccion = request.POST['numDir']
        contraseña = request.POST['contraseña']
        Repcontraseña = request.POST['RepContraseña']
        if contraseña == Repcontraseña:
            if Usuario.objects.filter(email=email).exists():
                messages.info(request,'El correo ya existe')
                return redirect('register')
            else:
                usuario = Usuario.objects.create(nombre = nombre, apellido = apellido, email = email, fecha_nacimiento = fecha_nacimiento, genero = genero
                                                      , telefono = telefono, region = region, comuna = comuna, direccion = direccion, numero_direccion = numero_direccion, contraseña = contraseña)
                usuario.save()
                return redirect('login')
        else:
            messages.info(request,'Las contraseñas no coinciden')
            return redirect('register')
    else:
        return render(request, 'pages/Register.html')   

def login(request):
    return render(request, 'pages/Login.html')
    
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