
from rest_framework import serializers
from .models import  TextInformation

class textSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextInformation
        fields ='__all__'
 