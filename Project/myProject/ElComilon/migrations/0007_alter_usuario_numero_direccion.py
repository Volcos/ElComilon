# Generated by Django 4.1.2 on 2024-06-18 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ElComilon', '0006_alter_producto_id_producto'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='numero_direccion',
            field=models.IntegerField(),
        ),
    ]
