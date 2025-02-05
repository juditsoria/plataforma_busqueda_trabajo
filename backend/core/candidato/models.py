from django.db import models
from core.usuario.models import CustomUser  # Importa desde la ruta completa


# Create your models here.
class Candidato(models.Model):
    usuario = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name="candidato")  
    experiencia = models.TextField()
    educacion = models.TextField()
    cv = models.FileField(upload_to='cvs/', null=True, blank=True)
    
    def __str__(self):
        return self.experiencia
    
    class Meta:
        db_table = "candidato"