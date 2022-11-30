import json


list = ['virnedra', 'hello', 'satraend']
student = {
    "name": 'Virendra',
    'age': [2, 343, 54]
}


studentString = json.dumps(student)
print(json.dumps(list))
print(studentString)

print(json.loads(studentString))
