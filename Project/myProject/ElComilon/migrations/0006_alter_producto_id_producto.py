# Generated by Django 5.0.1 on 2024-06-18 14:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ElComilon', '0005_comuna_genero_region_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='id_producto',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
