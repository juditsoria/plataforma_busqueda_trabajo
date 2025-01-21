from django.urls import path
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Candidato

urlpatterns = [
    path('', ListView.as_view(model=Candidato), name='lista_candidatos'),
    path('<int:pk>/', DetailView.as_view(model=Candidato), name='detalle_candidato'),
    path('nuevo/', CreateView.as_view(model=Candidato, fields='__all__', success_url='/candidatos/'), name='crear_candidato'),
    path('<int:pk>/editar/', UpdateView.as_view(model=Candidato, fields='__all__', success_url='/candidatos/'), name='editar_candidato'),
    path('<int:pk>/eliminar/', DeleteView.as_view(model=Candidato, success_url='/candidatos/'), name='eliminar_candidato'),
]
