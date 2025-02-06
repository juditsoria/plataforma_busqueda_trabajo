from rest_framework import serializers
from .models import Aplicacion, Candidato, Oferta
from core.usuario.serializers import CustomUserSerializer

class AplicacionSerializer(serializers.ModelSerializer):
    candidato = serializers.PrimaryKeyRelatedField(queryset=Candidato.objects.all())
    fecha_aplicacion = serializers.DateTimeField(required=False, read_only=True)  # La fecha puede ser auto asignada
    estado = serializers.CharField(required=True)
    id_oferta = serializers.PrimaryKeyRelatedField(queryset=Oferta.objects.all(), source='id_oferta')
    
    class Meta:
        model = Aplicacion
        fields = '__all__'
