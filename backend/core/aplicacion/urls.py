from django.urls import path
from .views import AplicacionListView, AplicacionDetailView

urlpatterns = [
    path('aplicaciones/', AplicacionListView.as_view(), name='aplicacion-list'),
    path('aplicaciones/<int:pk>/', AplicacionDetailView.as_view(), name='aplicacion-detail'),
]
