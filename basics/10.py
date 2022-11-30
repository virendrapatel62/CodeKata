myset = {1, 2, 3, 0,  12, 23, 1, 1, 1, 2, 2, 23, 3, 3}
# Sets are unordered, so you cannot be sure in which order the items will appear.
print(myset)

for value in myset:
    print(value)


print(1 in myset)

myset.add('adding item')

print(myset)


set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = set1.union(set2)
print(set3)

set1 = {"a", "b", "c"}
set2 = {1, 2, 3}

set1.update(set2)
print(set1)
