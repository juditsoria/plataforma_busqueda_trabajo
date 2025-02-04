from django.db import models

class Aplicacion(models.Model):
    id_aplicacion = models.AutoField(primary_key=True)
    fecha_aplicacion = models.DateTimeField(auto_now_add=True)
    estado = models.TextField()
    id_candidato = models.ForeignKey('candidato.Candidato', on_delete=models.CASCADE)
    id_oferta = models.ForeignKey('oferta.Oferta', on_delete=models.CASCADE)

    def __str__(self):
        return self.id_aplicacion
