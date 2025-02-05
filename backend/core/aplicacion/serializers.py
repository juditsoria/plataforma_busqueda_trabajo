from rest_framework import serializers
from .models import Aplicacion
from core.usuario.serializers import CustomUserSerializer

class AplicacionSerializer(serializers.ModelSerializer):
    candidato = CustomUserSerializer(source='id_candidato.usuario', read_only=True)

    class Meta:
        model = Aplicacion
        fields = '__all__'
