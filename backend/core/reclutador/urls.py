from django.urls import path
from .views import RecruiterListCreateView, RecruiterDetailView

urlpatterns = [
    path('recruiters/', RecruiterListCreateView.as_view(), name='recruiter-list-create'),
    path('recruiters/<int:pk>/', RecruiterDetailView.as_view(), name='recruiter-detail'),
]
