# https://www.codewars.com/kata/58d76854024c72c3e20000de

# Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

def reverse_alternate(s):
    s = s.split(" ")
    s = [i for i in s if i.strip()]
    for i, val in enumerate(s):
        if i % 2 != 0: s[i] = val[::-1]
    return " ".join(s)