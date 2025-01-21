from django.urls import path
from .views import CustomUserListCreateView, CustomUserDetailView, RegisterView

urlpatterns = [
    path('users/', CustomUserListCreateView.as_view(), name='user-list-create'),
    path('users/<int:pk>/', CustomUserDetailView.as_view(), name='user-detail'),
    path('register/', RegisterView.as_view(), name='register')
]
