from django import forms
from .models import Aplicacion

class AplicacionForm(forms.ModelForm):
    class Meta:
        model = Aplicacion
        fields = ['estado', 'id_candidato', 'id_oferta']