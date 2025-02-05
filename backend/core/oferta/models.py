from django.db import models
from core.reclutador.models import RecruiterProfile

# Create your models here.
class Oferta(models.Model):
    id_oferta = models.AutoField(primary_key = True)
    titulo = models.CharField(max_length=255, default="Titulo oferta")
    descripcion = models.TextField(null = False)
    fecha_publicacion = models.DateField(auto_now_add = True)
    salario = models.IntegerField(null = True, blank = True)
    ubicacion = models.CharField(max_length = 100)
    id_reclutador = models.ForeignKey(RecruiterProfile, on_delete = models.CASCADE)
    
    def __str__(self):
        return self.descripcion
    
    class Meta:
        db_table = 'oferta'