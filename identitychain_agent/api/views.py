from rest_framework import viewsets
#from api.serializers import WalletSerializer
#from api.models import Wallet

class WalletViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows wallets to be viewed or edited.
    """
    #queryset = Wallet.objects.all()
    #serializer_class = WalletSerializer
