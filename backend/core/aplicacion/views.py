from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import Aplicacion
from .serializers import AplicacionSerializer
from rest_framework import generics, permissions


class AplicacionListView(generics.ListCreateAPIView):
    """
    **AplicacionListView**:
    - Permite listar todos las aplicaciones de los candidatos y crear nuevas.
    - GET: Retorna una lista de aplicaciones.
    - POST: Crea una nueva aplicación para un candidato.
    """
    queryset = Aplicacion.objects.all()
    serializer_class = AplicacionSerializer
    permission_classes = [permissions.AllowAny]
    
class AplicacionDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    **AplicacionDetailView**:
    - Permite obtener, actualizar o eliminar una aplicacion de un candidato específico.
    - GET: Obtiene los detalles de cada aplicacion por su ID.
    - PUT/PATCH: Actualiza los datos de la aplicaicon.
    - DELETE: Elimina la aplicacion.
    """
    queryset = Aplicacion.objects.all()
    serializer_class = AplicacionSerializer
    permission_classes = [permissions.AllowAny] 
    
   