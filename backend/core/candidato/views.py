from django.shortcuts import render

# Create your views here.
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Candidato
from django.http import JsonResponse
from .serializers import CandidatoSerializer
from rest_framework import generics, permissions


class CandidatoListView(generics.ListCreateAPIView):
    """
    **CandidatoListView**:
    - Permite listar todos los candidatos y crear uno nuevo.
    - GET: Retorna una lista de candidatos.
    - POST: Crea un nuevo candidato.
    """
    queryset = Candidato.objects.all()
    serializer_class = CandidatoSerializer
    permission_classes = [permissions.AllowAny]
    
class CandidatoDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    **CandidatoDetailView**:
    - Permite obtener, actualizar o eliminar un candidato específico.
    - GET: Obtiene los detalles de un candidato por su ID.
    - PUT/PATCH: Actualiza los datos del candidato.
    - DELETE: Elimina el candidato.
    """
    queryset = Candidato.objects.all()
    serializer_class = CandidatoSerializer
    permission_classes = [permissions.AllowAny] 
    
   