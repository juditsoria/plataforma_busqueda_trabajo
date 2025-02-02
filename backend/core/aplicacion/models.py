from django.db import models
from core.oferta.models import Oferta

class Aplicacion(models.Model):
    id_aplicacion = models.AutoField(primary_key=True)
    fecha_aplicacion = models.DateTimeField(auto_now_add=True)
    estado = models.TextField()
    id_candidato = models.ForeignKey('candidato.Candidato', on_delete=models.CASCADE)
    id_oferta = models.ForeignKey(Oferta, on_delete=models.CASCADE)

    def __str__(self):
        return f"Aplicacion a {self.id_oferta.titulo}"
