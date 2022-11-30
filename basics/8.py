'''
append()	Adds an element at the end of the list
clear()	Removes all the elements from the list
copy()	Returns a copy of the list
count()	Returns the number of elements with the specified value
extend()	Add the elements of a list (or any iterable), to the end of the current list
index()	Returns the index of the first element with the specified value
insert()	Adds an element at the specified position
pop()	Removes the element at the specified position
remove()	Removes the item with the specified value
reverse()	Reverses the order of the list
sort()	Sorts the list
'''


numbers = []

numbers.append(0)
numbers.append(23)
numbers.append(34)
numbers.append(54)
numbers.append(345)
numbers.append(5345)

print(numbers)

numbers.pop()
print(numbers)


numbers.insert(0, 23)
print(numbers)

print(len(numbers))


for i in range(len(numbers)):
    print(numbers[i])


for i in range(10):
    print(i)


doubled = [numbers[index]*2 for index in range(len(numbers))]

print(doubled)


print(doubled)

doubled.sort()

print('doubled', doubled)
copy = doubled.copy()


print('copy', copy)


print("copy + double", copy + doubled)
