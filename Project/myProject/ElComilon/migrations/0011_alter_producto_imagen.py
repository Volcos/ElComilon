# Generated by Django 5.0.6 on 2024-07-10 00:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ElComilon', '0010_alter_usuario_email_alter_usuario_id_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='imagen',
            field=models.ImageField(upload_to='myProject/static/img/upload/'),
        ),
    ]
