from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'pages/index.html')

def register(request):
    return render(request, 'pages/Register.html')

def login(request):
    return render(request, 'pages/Login.html')
    
def detalleCompra(request):
    return render(request, 'pages/Detail.html')