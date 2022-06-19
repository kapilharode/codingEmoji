import json 
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK
from app.utils import DataManager
from app.models import TextInformation
from app.serializers import textSerializer
class TextData(APIView):
    def get(self,request,format=None):
        data=DataManager.get_data()
        current_text = textSerializer(data, many = True)
        return Response(
            data =current_text.data,
            status=HTTP_200_OK
        )

    def post(self, request, *args, **kwargs):
        text_data = request.POST.get('textData')
        if not text_data:
            return Response(data='Invalid Data', status=HTTP_400_BAD_REQUEST)
        result = DataManager.add_data(text_data)
        if not result:
            return Response(data='Internal server error', status=HTTP_400_BAD_REQUEST)
        return Response(data='successfully add data',status=HTTP_200_OK)