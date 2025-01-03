# https://www.codewars.com/kata/57cff961eca260b71900008f

# Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

# If they are, change the array value to a string of that vowel.

# Return the resulting array.

def is_vow(inp):
    vowels = [97, 101, 105, 111, 117]
    for i, element in enumerate(inp):
        if element in vowels:
            inp[i] = chr(element)
    return inp