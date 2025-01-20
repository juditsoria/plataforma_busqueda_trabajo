from django.shortcuts import render

# Create your views here.
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Candidato

class CandidatoListView(ListView):
    model = Candidato

class CandidatoDetailView(DetailView):
    model = Candidato

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
