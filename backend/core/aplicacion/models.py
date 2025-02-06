from django.db import models
from core.candidato.models import Candidato
from core.oferta.models import Oferta

class Aplicacion(models.Model):
    id_aplicacion = models.AutoField(primary_key=True)
    fecha_aplicacion = models.DateTimeField(auto_now_add=True)
    estado = models.TextField()
    candidato = models.ForeignKey(Candidato, on_delete=models.CASCADE, default = 0)
    oferta = models.ForeignKey(Oferta, on_delete=models.CASCADE)

    def __str__(self):
        return f"Aplicacion {self.id_aplicacion}"
