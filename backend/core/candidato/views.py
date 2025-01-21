from django.shortcuts import render

# Create your views here.
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Candidato
from django.http import JsonResponse

class CandidatoListView(ListView):
    model = Candidato
   
    def get(self, request, *args, **kwargs):
        candidatos = self.get_queryset()
        candidatos_data = list(candidatos.values())  # Convierte los objetos en diccionarios de datos
        return JsonResponse(candidatos_data, safe=False)
    
class CandidatoDetailView(DetailView):
    model = Candidato
    
    def get(self, request, *args, **kwargs):
            candidato = self.get_object()
            return JsonResponse({
            'id': candidato.id_candidato,
            'nombre': candidato.experiencia,
            'experiencia': candidato.educacion,
            "cv": candidato.cv,
            
            # Agrega otros campos del modelo aquí
        })

class CandidatoCreateView(CreateView):
    model = Candidato
    fields = '__all__'
    success_url = '/candidatos/'

class CandidatoUpdateView(UpdateView):
    model = Candidato
    fields = '__all__'
    success_url = '/candidatos/'

class CandidatoDeleteView(DeleteView):
    model = Candidato
    success_url = '/candidatos/'
