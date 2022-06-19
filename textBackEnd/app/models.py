from django.db import models

# Create your models here.
class TextInformation(models.Model):
    id = models.AutoField(max_length=11,primary_key=True)
    inputText= models.CharField(max_length=100)
    state = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.inputText