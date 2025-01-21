from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'first_name', 'last_name', 'phone', 'role', 'profile_image']


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'password', 'first_name', 'last_name', 'phone', 'role', 'company_name']

    password = serializers.CharField(write_only=True, required=True)
    role = serializers.ChoiceField(choices=[('candidate', 'Candidato'), ('recruiter', 'Reclutador')], required=True)

    company_name = serializers.CharField(required=False, allow_blank=True)

    def validate(self, data):
        if data.get('role') == 'recruiter' and not data.get('company_name'):
            raise serializers.ValidationError("El campo 'company_name' es obligatorio para los reclutadores.")
        return data

    def create(self, validated_data):
        company_name = validated_data.pop('company_name', None)
        user = CustomUser.objects.create_user(**validated_data)

        if company_name:
            user.company_name = company_name
            user.save()

        return user




