from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .models import Oferta
from .serializers import OfertaSerializer

class OfertaListView(APIView):
    """
    Vista para listar todas las ofertas y permitir la creación de nuevas.
    """

    @swagger_auto_schema(
        operation_description="Obtiene la lista de todas las ofertas disponibles.",
        responses={200: OfertaSerializer(many=True)}
    )
    def get(self, request):
        ofertas = Oferta.objects.all() 
        serializer = OfertaSerializer(ofertas, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(
        operation_description="Crea una nueva oferta.",
        request_body=OfertaSerializer,
        responses={201: OfertaSerializer()}
    )
    def post(self, request):
        serializer = OfertaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OfertaDetailView(APIView):
    """
    Vista para obtener, actualizar o eliminar una oferta específica.
    """

    @swagger_auto_schema(
        operation_description="Obtiene una oferta específica por ID.",
        responses={200: OfertaSerializer()}
    )
    def get(self, request, pk):
        try:
            oferta = Oferta.objects.get(pk=pk)
        except Oferta.DoesNotExist:
            return Response({"error": "Oferta no encontrada"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = OfertaSerializer(oferta)
        return Response(serializer.data)

    @swagger_auto_schema(
        operation_description="Actualiza una oferta específica.",
        request_body=OfertaSerializer,
        responses={200: OfertaSerializer()}
    )
    def put(self, request, pk):
        try:
            oferta = Oferta.objects.get(pk=pk)
        except Oferta.DoesNotExist:
            return Response({"error": "Oferta no encontrada"}, status=status.HTTP_404_NOT_FOUND)

        serializer = OfertaSerializer(oferta, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(
        operation_description="Elimina una oferta específica.",
        responses={204: "Oferta eliminada correctamente"}
    )
    def delete(self, request, pk):
        try:
            oferta = Oferta.objects.get(pk=pk)
        except Oferta.DoesNotExist:
            return Response({"error": "Oferta no encontrada"}, status=status.HTTP_404_NOT_FOUND)
        
        oferta.delete()
        return Response({"message": "Oferta eliminada correctamente"}, status=status.HTTP_204_NO_CONTENT)