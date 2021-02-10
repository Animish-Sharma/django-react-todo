from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Todo
from .serializers import TodoSerializer

# Create your views here.
class Todo(viewsets.ModelViewSet):
    queryset = Todo.objects.filter(completed=False)
    serializer_class = TodoSerializer
