# https://www.codewars.com/kata/51e0007c1f9378fa810002a9

# Write a simple parser that will parse and run Deadfish.

# Deadfish has 4 commands, each 1 character long:

# i increments the value (initially 0)
# d decrements the value
# s squares the value
# o outputs the value into the return array
# Invalid characters should be ignored.

# parse("iiisdoso")  ==>  [8, 64]

def parse(data):
    arr = []
    val = 0
    for i in data:
        if i == "i":
            val = val + 1
        if i == "d":
            val = val - 1
        if i == "s":
            val = val * val
        if i == "o":
            arr.append(val)
    return arr