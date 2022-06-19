from .models import TextInformation

class DataManager(object):
    """ Example """
    def get_data():
        data=TextInformation.objects.all()
        return data
       

    def add_data(text_data):
        try:
            TextInformation.objects.create(inputText=text_data)
            return True
        except Exception as e:
            raise e

   
 