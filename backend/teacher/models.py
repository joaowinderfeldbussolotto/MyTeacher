from django.db import models

# Create your models here.
class Teacher(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    value_per_hour = models.DecimalField(
        max_digits=9, decimal_places=2, null=False, blank=False
    )
    description = models.TextField(null=False, blank=False)
    photo = models.URLField(max_length=255, null=False, blank=False)

    def __str__(self):
        return f"Professor [nome={self.nome}]"


class Class(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(max_length=255, null=False, blank=False)
    teacher = models.ForeignKey(
        to=Teacher, on_delete=models.CASCADE, related_name="classes"
    )

    def __str__(self):
        return f"Aula [nome={self.name}]"
