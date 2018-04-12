import asyncio
from django.db import models
from django.conf import settings
from asgiref.sync import async_to_sync
from indy import wallet as IndyWallet
from indy import pool, error

pool_handle = async_to_sync(pool.open_pool_ledger)(settings.POOL_NAME, None)

class Wallet(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(primary_key=True, )
    pool_name = models.TextField()
    name = models.TextField()
    xtype = models.TextField(blank=True)
    config = models.TextField(blank=True)
    credentials = models.TextField(blank=True, default="")

    class Meta:
        ordering = ['created']


class Schema(models.Model):
    created = models.DateTimeField(auto_now_add=True)

    schema_object = models.TextField()

    class Meta:
        ordering = ['created']


class ClaimDef(models.Model):
    created = models.DateTimeField(auto_now_add=True)

    schema_req_id = models.TextField()

    class Meta:
        ordering = ['created']


class Claim(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    claim_object = models.TextField()

    class Meta:
         ordering = ['created']


class ClaimOffer(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    n_id = models.IntegerField()
    schema = models.IntegerField()
    seq_no = models.IntegerField()
    class Meta:
        ordering = ['created']


class IndyConnection(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    url = models.URLField()

    class Meta:
        ordering = ['created']


class Proof(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    proof_obj= models.TextField()

    class Meta:
        ordering = ['created']




