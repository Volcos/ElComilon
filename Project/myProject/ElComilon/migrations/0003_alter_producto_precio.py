# Generated by Django 5.0.6 on 2024-06-08 00:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ElComilon', '0002_alter_producto_nombre'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='precio',
            field=models.IntegerField(max_length=6),
        ),
    ]