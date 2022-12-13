from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from json import loads


def index(request):
    print(request.method)
    return render(request, 'index.html')


def createStudent(request):
    students = loads(request.POST.get('students'))
    print('-------------------')
    for student in students:
        print(student['email'], student['firstName'], student['lastName'])
    print('-------------------')

    return JsonResponse({
        "message": "student Saved.."
    })
