from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('Register',views.register, name='Register'),
    path('Login', views.login, name='Login'),
    path('detalleCompra', views.detalleCompra, name='detalleCompra'),
    path('Profile',views.Profile, name='Profile')
]