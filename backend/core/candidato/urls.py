from django.urls import path
from .views import CandidatoListView, CandidatoDetailView

urlpatterns = [
    path('candidatos/', CandidatoListView.as_view(), name='candidato-list'),
    path('candidatos/<int:pk>/', CandidatoDetailView.as_view(), name='candidato-detail'),
]
