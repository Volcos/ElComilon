# Generated by Django 5.0.6 on 2024-07-10 01:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ElComilon', '0011_alter_producto_imagen'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='imagen',
            field=models.ImageField(upload_to='upload/'),
        ),
    ]
