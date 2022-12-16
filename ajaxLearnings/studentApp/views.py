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


def coursesPage(request):
    return render(request, 'courses.html')


courses = []


def createCourses(request):
    print(request.POST.get('courses'))
    global courses
    courses = loads(request.POST.get('courses'))
    print('-------------------')
    for course in courses:
        print(course['author'], course['courseName'], course['price'])
    print('-------------------')

    return JsonResponse({
        "message": "Courses Saved.."
    })


def getCourses(request):
    return JsonResponse({'courses': courses})
