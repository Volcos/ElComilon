from django.contrib import admin
from .models import Producto,Genero,Usuario,Compra,DetalleCompra


# Register your models here.


admin.site.register(Producto)
admin.site.register(Usuario)
admin.site.register(Genero)
admin.site.register(Compra)
admin.site.register(DetalleCompra)