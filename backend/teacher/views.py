from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from django.shortcuts import get_object_or_404

from teacher.models import Teacher, Class
from teacher.serializers import TeacherSerializer, SaveClassSerializer, ClassSerializer

class TeacherAPIView(APIView):
    def get(self, request, format = None):
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers, many=True)
        return Response(serializer.data, status = HTTP_200_OK)

class SaveClassAPIView(APIView):
    def post(self, request, id, format = None):
        teacher = get_object_or_404(Teacher, id=id)
        serializer = SaveClassSerializer(data = request.data)
        if serializer.is_valid():
            _class = Class(name = serializer.validated_data.get('name'), 
            email = serializer.validated_data.get('email'),
            teacher = teacher
            )
            _class.save()
            class_serializer = ClassSerializer(_class, many=False)
            return Response(class_serializer.data, status = HTTP_201_CREATED)

        return Response(
            {
                "message": "Houveram erros de validação",
                "errors": serializer.errors
            },
            status=HTTP_400_BAD_REQUEST)
        

