from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('Register',views.register, name='Register'),
    path('Login', views.login, name='Login'),
    path('detalleCompra', views.detalleCompra, name='detalleCompra'),
    path('Profile',views.Profile, name='Profile'),
    path('DetailProduct/<str:pk>',views.detailProduct, name='DetailProduct'),
    path('AdminIndex',views.adminIndex, name='AdminIndex'),
    path('AgregarPlato',views.agregarPlato,name='AgregarPlato'),
    path('OrderTracking',views.OrderTracking,name='OrderTracking'),
    path('agregar_al_carrito/<int:producto_id>/', views.agregar_al_carrito, name='agregar_al_carrito'),
    path('ver_carrito/', views.ver_carrito, name='ver_carrito'),
    path('eliminar_del_carrito/<int:producto_id>/', views.eliminar_del_carrito, name='eliminar_del_carrito'),
]