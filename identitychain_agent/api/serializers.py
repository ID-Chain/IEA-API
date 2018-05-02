from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import *


class UserSerializer(serializers.ModelSerializer):
    wallets = serializers.PrimaryKeyRelatedField(many=True, queryset=Wallet.objects.all())

    class Meta:
        model = User
        fields = ('id', 'url', 'username', 'email', 'wallets', 'is_staff')


class WalletSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    issueDID = serializers.ReadOnlyField(source='issueDID.did')

    class Meta:
        model = Wallet
        fields = '__all__'


class ConnectionOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConnectionOffer
        fields = ('wallet', 'did', 'nonce')


class ConnectionSerializer(serializers.Serializer):
    wallet = serializers.PrimaryKeyRelatedField(many=False, queryset=Wallet.objects.all())
    connection_offer = ConnectionOfferSerializer(required=True)

    def update(self, instance, validated_data):
        raise NotImplementedError()

    def create(self, validated_data):
        return validated_data


class EndpointSerializer(serializers.Serializer):
    type = serializers.ChoiceField(choices=['anon', 'auth'], default='anon')
    target = serializers.CharField(required=True)
    ref = serializers.CharField(required=True)
    message = serializers.JSONField(required=True)

    def update(self, instance, validated_data):
        raise NotImplementedError("Do not change a message after receiving")

    def create(self, validated_data):
        return validated_data


class SchemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schema
        fields = '__all__'

class ClaimDefSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClaimDef
        fields = '__all__'


class ClaimSerializer(serializers.ModelSerializer):
    class Meta:
        model = Claim
        fields = '__all__'


class ClaimOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClaimOffer
        fields = '__all__'


class ProofSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proof
        fields = '__all__'


