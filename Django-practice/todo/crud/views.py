from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from .models import Todos
from django.urls import reverse


def index(request):
    todos = Todos.objects.all().values()
    context = {
        'todos': todos,
    }
    template = loader.get_template('index.html')
    return HttpResponse(template.render(context, request))


def sayMorning(request):
    return HttpResponse("Good Morning...")


def sayHello(request):
    return HttpResponse("Saying Hello")


def add(request):
    template = loader.get_template('add.html')
    return HttpResponse(template.render({}, request))


def addrecord(request):
    todo = request.POST['todo']
    description = request.POST['description']
    todo = Todos(todo=todo, description=description)
    todo.save()
    return HttpResponseRedirect(reverse('index'))


def delete(request, id):
    todo = Todos.objects.get(id=id)
    todo.delete()
    return HttpResponseRedirect(reverse('index'))


def testing(request):
    template = loader.get_template('template.html')
    context = {
        'firstname': 'Virendra',
        'numbers': [12, 23, 3, 546, 56, 67, 78],
    }
    return HttpResponse(template.render(context, request))
