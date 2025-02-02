from django.db import models
from core.reclutador.models import RecruiterProfile

class Oferta(models.Model):
    id_oferta = models.AutoField(primary_key = True)
    descripcion = models.TextField(null = False)
    fecha_publicacion = models.DateField(auto_now_add = True)
    salario = models.IntegerField(null = True, blank = True)
    ubicacion = models.CharField(max_length = 100)
    id_reclutador = models.ForeignKey(RecruiterProfile, on_delete = models.CASCADE)
    
def __str__(self):
    return f'Oferta{self.id_oferta}'