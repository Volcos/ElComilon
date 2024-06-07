from django.db import models

# Create your models here.


class Producto(models.Model):
    id_producto = models.Autofield(primary_key = True)
    nombre = models.CharField(max_length = 30)
    precio = models.CharField(max_length = 5)
    descripcion = models.CharField(max_length = 50)
    ingredientes = models.CharField(max_length = 80)
    cantidad = models.CharField(max_length = 3)
    
    def __str__(self):
        return str(self.id_producto
                + " "
                + str(self.nombre)
                + " "
                + str(self.precio)
                + " "
                + str(self.cantidad)
        )