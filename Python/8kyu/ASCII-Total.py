# https://www.codewars.com/kata/572b6b2772a38bc1e700007a

# You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

# examples:

# uniTotal("a") == 97 uniTotal("aaa") == 291

def uni_total(s):
    sum = 0
    for a in s:
        sum += ord(a)
    return sum