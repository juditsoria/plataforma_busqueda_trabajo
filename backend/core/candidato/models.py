from django.db import models


# Create your models here.
class Candidato(models.Model):
    id_candidato = models.AutoField(primary_key=True)
    experiencia = models.TextField()
    educacion = models.TextField()
    # id_usuario = models.ForeignKey('Usuario', on_delete=models.CASCADE)
    cv = models.FileField(upload_to='cvs/', null=True, blank=True)
    
    def _str_(self):
        return self.nombre