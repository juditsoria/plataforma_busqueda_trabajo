from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import RecruiterProfile
from .serializers import RecruiterSerializer

class RecruiterListCreateView(generics.ListCreateAPIView):
    queryset = RecruiterProfile.objects.all()
    serializer_class = RecruiterSerializer

class RecruiterDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = RecruiterProfile.objects.all()
    serializer_class = RecruiterSerializer
