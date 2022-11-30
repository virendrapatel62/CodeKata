def counter():
    count = 0

    def inc():
        nonlocal count
        count = count + 1

    def getCount():
        nonlocal count
        return count

    inc()
    return [getCount, inc]


getCount, inc = counter()

inc()
inc()
inc()
inc()
inc()
print(getCount())
