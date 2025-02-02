from django.shortcuts import render

# Create your views here.
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Candidato
from django.http import JsonResponse

class CandidatoListView(ListView):
    '''
    **CandidatoListView**: 
   - Esta vista utiliza `ListView` para obtener todos los candidatos.
   - En lugar de renderizar una plantilla HTML, devuelve los datos de los candidatos como una respuesta JSON.
   - En el método `get()`, primero se obtienen los candidatos mediante `get_queryset()`, luego se convierte la consulta en una lista de diccionarios utilizando `values()`.
   - Finalmente, los datos se devuelven como una respuesta JSON utilizando `JsonResponse`, con el parámetro `safe=False` para permitir listas de objetos.
   '''
    model = Candidato
   
    def get(self, request, *args, **kwargs):
        candidatos = self.get_queryset()
        candidatos_data = list(candidatos.values())  # Convierte los objetos en diccionarios de datos
        return JsonResponse(candidatos_data, safe=False)
    
class CandidatoDetailView(DetailView):
    '''
    **CandidatoDetailView**:
   - Esta vista utiliza `DetailView` para obtener detalles de un candidato específico basado en su `id`.
   - En el método `get()`, se obtiene el candidato utilizando `get_object()` y luego se devuelve una respuesta JSON con los campos relevantes del modelo `Candidato`. 
   - Los campos de este modelo son: `id_candidato`, `experiencia`, `educacion` y `cv`. 
   - Aquí se pueden agregar más campos del modelo según sea necesario.
   '''
    model = Candidato
    
    def get(self, request, *args, **kwargs):
            '''
        **Contenido del JSON**:
        - `'id': candidato.id_candidato`: Se devuelve el `id_candidato` del candidato como parte de la respuesta.
        - `'nombre': candidato.nombre`: Devuelve el nombre del candidato. Este campo corresponde al atributo `nombre` del modelo `Candidato`.
        - `'experiencia': candidato.educacion`: Aquí parece haber un error. El valor de `experiencia` debería corresponder al atributo adecuado del modelo, no a `educacion`. Probablemente debería ser algo como `candidato.experiencia`.
        - `"cv": candidato.cv`: Devuelve el archivo o enlace del CV del candidato, dependiendo de cómo esté almacenado en el modelo.
            '''
            candidato = self.get_object()
            return JsonResponse({
            'id': candidato.id_candidato,
            'nombre': candidato.nombre,
            'experiencia': candidato.educacion,
            "cv": candidato.cv,
            
        })

class CandidatoCreateView(CreateView):
    '''
    **CandidatoCreateView**:
   - Esta vista utiliza `CreateView` para manejar la creación de un nuevo candidato.
   - Los campos del modelo `Candidato` se definen mediante `fields = '__all__'`, lo que significa que se usarán todos los campos del modelo.
   - Después de crear un candidato, la vista redirige a la lista de candidatos utilizando `success_url`.
   '''
    model = Candidato
    fields = '__all__'
    success_url = '/candidatos/'

class CandidatoUpdateView(UpdateView):
    '''
    **CandidatoUpdateView**:
   - Esta vista utiliza `UpdateView` para manejar la actualización de un candidato existente.
   - Los campos del modelo se definen de la misma manera que en `CreateView`, usando `fields = '__all__'`.
   - Después de actualizar el candidato, se redirige a la lista de candidatos con `success_url`.
   '''
    model = Candidato
    fields = '__all__'
    success_url = '/candidatos/'

class CandidatoDeleteView(DeleteView):
    '''
    **CandidatoDeleteView**:
   - Esta vista utiliza `DeleteView` para manejar la eliminación de un candidato.
   - Después de eliminar un candidato, la vista redirige a la lista de candidatos utilizando `success_url`.
   '''
    model = Candidato
    success_url = '/candidatos/'
