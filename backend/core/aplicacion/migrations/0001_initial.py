# Generated by Django 5.1.5 on 2025-02-06 12:47

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('candidato', '0001_initial'),
        ('oferta', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Aplicacion',
            fields=[
                ('id_aplicacion', models.AutoField(primary_key=True, serialize=False)),
                ('fecha_aplicacion', models.DateTimeField(auto_now_add=True)),
                ('estado', models.TextField()),
                ('candidato', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='candidato.candidato')),
                ('id_oferta', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='oferta.oferta')),
            ],
        ),
    ]
