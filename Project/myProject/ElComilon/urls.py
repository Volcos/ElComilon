from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.index, name='index'),
    path('Register',views.register, name='Register'),
    path('Login', views.user_login, name='Login'),
    path('detalleCompra', views.detalleCompra, name='detalleCompra'),
    path('Profile',views.Profile, name='Profile'),
    path('DetailProduct/<str:pk>',views.detailProduct, name='DetailProduct'),
    path('AdminIndex',views.adminIndex, name='AdminIndex'),
    path('AgregarPlato',views.agregarPlato,name='AgregarPlato'),
    path('eliminarPlato/<int:pk>',views.eliminarPlato,name='eliminarPlato'),
    path('modificarPlato/<int:pk>',views.modificarPlato,name='modificarPlato'),
    path('buscarPlatoEdit/<int:pk>',views.buscarPlatoEdit,name='buscarPlatoEdit'),
    path('OrderTracking',views.OrderTracking,name='OrderTracking'),
    path('agregar_al_carrito/<int:producto_id>/', views.agregar_al_carrito, name='agregar_al_carrito'),
    path('ver_carrito/', views.ver_carrito, name='ver_carrito'),
    path('eliminar_del_carrito/<int:producto_id>/', views.eliminar_del_carrito, name='eliminar_del_carrito'),
    path('logout',views.desconectar,name='logout'),
    path('GuardarCompra',views.guardarCompra,name='GuardarCompra'),
    path('get_profile_data/',views.get_profile_data,name='get_profile_data'),
    path('get_order_data/',views.get_order_data,name='get_order_data'),
    path('test/',views.test,name="test"),
    path('compras/',views.compras,name="compras")
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
