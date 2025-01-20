from django.urls import path
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Candidato

urlpatterns = [
    path('candidatos/', ListView.as_view(model=Candidato), name='lista_candidatos'),
    path('candidatos/<int:pk>/', DetailView.as_view(model=Candidato), name='detalle_candidato'),
    path('candidatos/nuevo/', CreateView.as_view(model=Candidato, fields='__all__', success_url='/candidatos/'), name='crear_candidato'),
    path('candidatos/<int:pk>/editar/', UpdateView.as_view(model=Candidato, fields='__all__', success_url='/candidatos/'), name='editar_candidato'),
    path('candidatos/<int:pk>/eliminar/', DeleteView.as_view(model=Candidato, success_url='/candidatos/'), name='eliminar_candidato'),
]
