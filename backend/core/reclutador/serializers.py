from rest_framework import serializers
from .models import RecruiterProfile
from core.usuario.serializers import CustomUserSerializer

class RecruiterSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)  # Mostrar datos del usuario relacionado

    class Meta:
        model = RecruiterProfile
        fields = ['id', 'user', 'company_name']
