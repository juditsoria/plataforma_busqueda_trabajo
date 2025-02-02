from django.urls import path
from .views import OfertaListView

urlpatterns = [
    path('', OfertaListView.as_view(), name='lista_ofertas'),
]