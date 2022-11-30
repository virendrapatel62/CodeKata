marks = [12, 34, 45, 34]

studentDict = {
    'name': 'virnedra',
    'age': 23,
    "marks": marks
}


print(studentDict)
print(studentDict['name'])
print(studentDict['age'])
print(studentDict['marks'])

print(studentDict.get('key', 'not-found'))

studentDict.pop('age')

print(studentDict)

for key in studentDict:
    print(key, studentDict[key])


print(studentDict.values())
print(studentDict.keys())

print(studentDict.items())

print(studentDict.copy())


print(studentDict)
studentDict.clear()
print(studentDict)
