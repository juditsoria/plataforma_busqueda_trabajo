from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, AbstractUser
from django.db import models

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

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
    company_name = models.CharField(max_length=255, blank=True, null=True)

    USERNAME_FIELD = 'email'  # Cambiar identificador único a `email`
    REQUIRED_FIELDS = ['first_name', 'last_name', 'role']

    objects = CustomUserManager()

    def __str__(self):
        return f"{self.email} - {self.get_role_display()}"