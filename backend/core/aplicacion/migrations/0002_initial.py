# Generated by Django 5.1.5 on 2025-01-28 20:42

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('aplicacion', '0001_initial'),
        ('oferta', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='aplicacion',
            name='id_oferta',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='oferta.oferta'),
        ),
    ]
