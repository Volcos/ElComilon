from django.shortcuts import render
from django.http import HttpResponse
from .models import Producto

# Create your views here.
def index(request):
    productos = Producto.objects.all()
    return render(request, 'pages/index.html', {'productos':productos})

def register(request):
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
    