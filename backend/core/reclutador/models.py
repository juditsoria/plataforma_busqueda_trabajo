from django.db import models

# Create your models here.
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from core.usuario.models import CustomUser

class RecruiterProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,  # Referencia al modelo de usuario personalizado
        on_delete=models.CASCADE,
        related_name='recruiter_profile'  # Facilita el acceso al perfil desde el usuario
    )
    company_name = models.CharField(max_length=255)  # Nombre de la compañía
    website = models.URLField(blank=True, null=True)  # Opcional: Página web de la compañía
    bio = models.TextField(blank=True, null=True)  # Opcional: Breve descripción del reclutador

    def __str__(self):
        return f"{self.user.email} - {self.company_name}"
    

@receiver(post_save, sender=CustomUser)
def create_recruiter_profile(sender, instance, created, **kwargs):
    if created and instance.role == 'recruiter':
        RecruiterProfile.objects.create(user=instance)
