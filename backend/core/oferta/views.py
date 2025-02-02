from rest_framework.views import APIView
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .models import Oferta
from .serializers import OfertaSerializer

class OfertaListView(APIView):
    """
    Vista para listar todas las ofertas.
    """
    @swagger_auto_schema(
        operation_description="Obtiene la lista de todas las ofertas disponibles.",
        responses={200: OfertaSerializer(many=True)}
    )
    def get(self, request):
        ofertas = Oferta.objects.all() 
        serializer = OfertaSerializer(ofertas, many=True)
        return Response(serializer.data)