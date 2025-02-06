from rest_framework import serializers
from .models import Aplicacion
from core.usuario.serializers import CustomUserSerializer

class AplicacionSerializer(serializers.ModelSerializer):
    candidato = serializers.StringRelatedField()
    
    class Meta:
        model = Aplicacion
        fields = '__all__'
