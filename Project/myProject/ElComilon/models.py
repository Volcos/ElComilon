from django.db import models

# Create your models here.


class Producto(models.Model):
    id_producto = models.IntegerField(primary_key = True)
    nombre = models.CharField(max_length = 80)
    precio = models.IntegerField()
    descripcion = models.CharField(max_length = 50)
    ingredientes = models.CharField(max_length = 80)
    imagen = models.CharField(max_length=300)
    
    
class Test(models.Model):
    nombre = models.CharField(max_length=30)