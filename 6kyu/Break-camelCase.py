# https://www.codewars.com/kata/5208f99aee097e6552000148

# Complete the solution so that the function will break up camel casing, using a space between words.

# Example
# "camelCasing"  =>  "camel Casing"
# "identifier"   =>  "identifier"
# ""             =>  ""

def solution(s):
    index = 0;
    for val in s:
        if(s[index].isupper()):
            s = s[:index] + " " + s[index:]
            index += 1
        index += 1
    return s