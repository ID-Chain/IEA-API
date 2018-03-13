from django.urls import path, include
from rest_framework import routers
from rest_framework_swagger.views import get_swagger_view

from api import views

schema_view = get_swagger_view(title='IdentityChain API')

router = routers.DefaultRouter()

urlpatterns = [
    path('overview', schema_view),
    path('', include(router.urls)),
]
