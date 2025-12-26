from django.db import models

class ProductModel(models.Model):
    name = models.CharField(max_length=100)
    stock = models.IntegerField(default=0)
