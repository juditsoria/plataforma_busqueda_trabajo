# Generated by Django 5.1.5 on 2025-02-06 18:02

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('aplicacion', '0002_initial'),
        ('oferta', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='aplicacion',
            name='oferta',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='oferta.oferta'),
        ),
    ]
