from django.urls import path
from . import views

urlpatterns = [
    # /todos
    path('', views.index, name='index'),
    path('morning', views.sayMorning, name='morning'),
    path('hello', views.sayHello, name='hello'),
    path('add/', views.add, name='add'),
    path('add/addrecord/', views.addrecord, name='addrecord'),
    path('delete/<int:id>', views.delete, name='delete'),
    path('testing', views.testing, name='delete'),
]
