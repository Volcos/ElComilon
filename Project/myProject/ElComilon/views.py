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