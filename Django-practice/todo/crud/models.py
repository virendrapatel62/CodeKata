from django.db import models


class Todos(models.Model):
    todo = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
