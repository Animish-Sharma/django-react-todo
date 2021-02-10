from django.urls import path,include
from .views import Todo
from rest_framework import routers

router = routers.DefaultRouter()

router.register('',Todo,'todo')


urlpatterns = [
    path('', include(router.urls))
]