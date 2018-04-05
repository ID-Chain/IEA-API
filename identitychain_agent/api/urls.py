from django.contrib.auth.models import User
from django.db import models
from django.urls import path, include
from rest_framework import routers, serializers, viewsets
from rest_framework_swagger.views import get_swagger_view


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class Wallet(models.Model):
    created = models.DateTimeField(auto_now_add=True)

    pool_name = models.TextField
    name= models.CharField
    xtype= models.TextField(blank=True)
    config= models.TextField(blank=True)
    credentials= models.TextField(blank=True, default="")

    class Meta:
        ordering = ['created']

class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields = '__all__'


class WalletViewSet(viewsets.ModelViewSet):
    queryset = Wallet.objects.all()
    serializer_class = WalletSerializer
    # def list(self, request):
    #     pass
    #
    # def create(self, request):
    #     pass
    #
    # def retrieve(self, request, pk=None):
    #     pass
    #
    # def update(self, request, pk=None):
    #     pass
    #
    # def partial_update(self, request, pk=None):
    #     pass
    #
    # def destroy(self, request, pk=None):
    #     pass

class Schema(models.Model):
    created = models.DateTimeField(auto_now_add=True)

    schema_object = models.TextField

    class Meta:
        ordering = ['created']


class SchemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schema
        fields = '__all__'


class SchemaViewSet(viewsets.ModelViewSet):
    queryset = Schema.objects.all()
    serializer_class = SchemaSerializer


class ClaimDef(models.Model):
        created = models.DateTimeField(auto_now_add=True)

        schema_req_id= models.TextField

        class Meta:
            ordering = ['created']


class ClaimDefSerializer(serializers.ModelSerializer):
        class Meta:
            model = ClaimDef
            fields = '__all__'


class ClaimDefViewSet(viewsets.ModelViewSet):
        queryset = ClaimDef.objects.all()
        serializer_class = ClaimDefSerializer


class IndyConnection(models.Model):
        created = models.DateTimeField(auto_now_add=True)
        url = models.URLField

        class Meta:
            ordering = ['created']


class IndyConnectionSerializer(serializers.ModelSerializer):
        class Meta:
            model = IndyConnection
            fields = '__all__'


class IndyConnectionViewSet(viewsets.ModelViewSet):
        queryset = IndyConnection.objects.all()
        serializer_class = IndyConnectionSerializer


class Claim(models.Model):
        created = models.DateTimeField(auto_now_add=True)
        claim_object = models.TextField

        class Meta:
            ordering = ['created']


class ClaimSerializer(serializers.ModelSerializer):
    class Meta:
        model = Claim
        fields = '__all__'


class ClaimViewSet(viewsets.ModelViewSet):
    queryset = Claim.objects.all()
    serializer_class = ClaimSerializer


class ClaimOffer(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    n_id = models.IntegerField
    schema = models.IntegerField
    seq_no = models.IntegerField
    class Meta:
        ordering = ['created']


class ClaimOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClaimOffer
        fields = '__all__'


class ClaimOfferViewSet(viewsets.ModelViewSet):
    queryset = ClaimOffer.objects.all()
    serializer_class = ClaimOfferSerializer


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'wallet', WalletViewSet)
router.register(r'schema', SchemaViewSet)
router.register(r'claimdef', ClaimDefViewSet)
router.register(r'claim',ClaimViewSet)
router.register(r'claimoffer',ClaimOfferViewSet)
router.register(r'connection', IndyConnectionViewSet)

schema_view = get_swagger_view(title='IdentityChain API')
# schema_view = get_schema_view(title='Users API', renderer_classes=[OpenAPIRenderer, SwaggerUIRenderer])


# router = routers.DefaultRouter()

urlpatterns = [
    path(r'docs/', schema_view),
    path('', include(router.urls)),
]
