from rest_framework import serializers
from .models import Candidato
from core.usuario.serializers import CustomUserSerializer

class CandidatoSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)  

    class Meta:
        model = Candidato
        fields = '__all__'
