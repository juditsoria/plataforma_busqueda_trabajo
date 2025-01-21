from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('candidate', 'Candidato'),
        ('recruiter', 'Reclutador'),
        ('admin', 'Administrador'),
    ]

    username = None  # Eliminar el campo `username` del modelo base
    email = models.EmailField(unique=True)  # Usar email como identificador único
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    phone = models.CharField(max_length=15, blank=True, null=True)  # Campo para teléfono
    role = models.CharField(max_length=15, choices=ROLE_CHOICES, default='candidate')  # Rol del usuario
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)  # Imagen de perfil

    USERNAME_FIELD = 'email'  # Cambiar identificador único a `email`
    REQUIRED_FIELDS = ['first_name', 'last_name', 'role']

    def __str__(self):
        return f"{self.email} - {self.get_role_display()}"
