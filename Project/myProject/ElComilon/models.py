from django.db import models

# Create your models here.


class Producto(models.Model):
    id_producto = models.AutoField(primary_key = True)
    nombre = models.CharField(max_length = 80)
    precio = models.IntegerField()
    descripcion = models.CharField(max_length = 50)
    ingredientes = models.CharField(max_length = 80)
    imagen = models.ImageField(upload_to='upload/')
    def __str__(self):
        return str(self.nombre)+" "+str(self.id_producto)

class Compra(models.Model):
    id_compra =models.AutoField(primary_key=True)
    correo_cliente = models.CharField(max_length=100)
    fecha_compra = models.DateField()

class DetalleCompra(models.Model):
    id_compra = models.ForeignKey(
        "Compra", on_delete=models.CASCADE, db_column="id_compra"
    )
    producto = models.CharField(max_length=80)

class Genero(models.Model):
    id_genero = models.AutoField(primary_key=True,db_column="idGenero")
    genero = models.CharField(max_length=25, blank=False,null = False)

    def __str__(self):
        return str(self.genero)


class Usuario(models.Model):
    id_usuario = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length = 30)
    apellido = models.CharField(max_length = 30)
    email = models.EmailField(max_length=100, unique = True)
    fecha_nacimiento = models.DateField()
    id_genero = models.ForeignKey(
        "Genero", on_delete=models.CASCADE,db_column="idGenero"
    )
    telefono = models.CharField(max_length=12)
    region = models.CharField(max_length=40, default='')
    comuna = models.CharField(max_length=40, default='')
    direccion = models.CharField(max_length=40)
    numero_direccion = models.IntegerField()
    contraseña = models.CharField(max_length=30)

    def __str__(self):
        return (
        str(self.nombre)
        + " "
        + str(self.apellido)
        )

#------------------------------------------------------ IMPORTANTE ----------------------------------------------#
#datos de login de admin
#username: be.vargast@duocuc.cl
#contraseña: admin