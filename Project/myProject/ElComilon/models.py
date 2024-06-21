from django.db import models

# Create your models here.


class Producto(models.Model):
    id_producto = models.AutoField(primary_key = True)
    nombre = models.CharField(max_length = 80)
    precio = models.IntegerField()
    descripcion = models.CharField(max_length = 50)
    ingredientes = models.CharField(max_length = 80)
    imagen = models.CharField(max_length=300)
    
class Genero(models.Model):
    id_genero = models.AutoField(primary_key=True,db_column="idGenero")
    genero = models.CharField(max_length=25, blank=False,null = False)

    def __str__(self):
        return str(self.genero)

class Region(models.Model):
    id_region = models.AutoField(primary_key=True,db_column="idRegion")
    region = models.CharField(max_length=40, blank=False,null = False)

    def __str__(self):
        return str(self.region)

class Comuna(models.Model):
    id_comuna = models.AutoField(primary_key=True,db_column="idComuna")
    comuna = models.CharField(max_length=40, blank=False,null = False)

    def __str__(self):
        return str(self.comuna)


class Usuario(models.Model):
    id_usuario = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length = 30)
    apellido = models.CharField(max_length = 30)
    email = models.EmailField(max_length=100, unique=True, blank=True, null=True)
    fecha_nacimiento = models.DateField()
    id_genero = models.ForeignKey(
        "Genero", on_delete=models.CASCADE,db_column="idGenero"
    )
    telefono = models.CharField(max_length=12)
    id_region = models.ForeignKey(
        "Region", on_delete=models.CASCADE,db_column="idRegion"
    )
    id_comuna = models.ForeignKey(
        "Comuna", on_delete=models.CASCADE,db_column="idComuna"
    )
    direccion = models.CharField(max_length=40)
    numero_direccion = models.IntegerField()
    contraseña = models.CharField(max_length=30)


class Test(models.Model):
    nombre = models.CharField(max_length=30)
