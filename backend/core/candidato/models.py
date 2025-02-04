from django.db import models


# Create your models here.
class Candidato(models.Model):
    '''
Esta es la clase `Candidato`, que define el modelo de base de datos para almacenar información de los candidatos en el sistema.

1. **`id_candidato = models.AutoField(primary_key=True)`**:
   - Se define un campo `id_candidato` que actúa como la clave primaria del modelo.
   - `AutoField` significa que este campo será autoincremental, es decir, se asignará automáticamente un valor único y creciente cada vez que se cree un nuevo candidato.
   
2. **`experiencia = models.TextField()`**:
   - Este campo almacena la experiencia del candidato.
   - Se utiliza `TextField` porque la experiencia laboral puede ser un texto largo y no tiene una longitud fija.

3. **`educacion = models.TextField()`**:
   - Similar al campo anterior, este almacena la información educativa del candidato.
   - También se usa `TextField` para permitir almacenar descripciones extensas de los estudios del candidato.

4. **`cv = models.FileField(upload_to='cvs/', null=True, blank=True)`**:
   - Este campo almacena el archivo del CV del candidato.
   - `FileField` es adecuado para almacenar archivos, como documentos de texto o PDF.
   - `upload_to='cvs/'` indica que los archivos se almacenarán en una carpeta llamada `cvs` dentro del directorio de medios del proyecto.
   - `null=True, blank=True` permite que este campo sea opcional, es decir, no es obligatorio que un candidato tenga un archivo de CV.

5. **`def _str_(self):`**:
   - Este método define la representación en forma de cadena del objeto `Candidato`. 
   - El método debería devolver una cadena que identifique al candidato, pero hay un error en el código: se hace referencia a `self.nombre`, pero el modelo no tiene un campo `nombre`. 
   - Debería devolver un campo válido que represente al candidato, como `self.experiencia` o cualquier otro campo identificador.

'''
    id_candidato = models.AutoField(primary_key=True)
    experiencia = models.TextField()
    educacion = models.TextField()
    # id_usuario = models.ForeignKey('Usuario', on_delete=models.CASCADE)
    cv = models.FileField(upload_to='cvs/', null=True, blank=True)
    
    def _str_(self):
        return self.nombre