# https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

# The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

# Examples
# "din"      =>  "((("
# "recede"   =>  "()()()"
# "Success"  =>  ")())())"
# "(( @"     =>  "))((" 
# Notes
# Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

def duplicate_encode(word):
    freq = {}
    ret = ""
    index = 0
    for i in word:
        if i.lower() in freq:
            freq[i.lower()] += 1
        else:
            freq[i.lower()] = 1
    for i in enumerate(word):
        if(freq[word[index].lower()] > 1):
            ret = ret + ")"
            index += 1
        else:
            ret = ret + "("
            index += 1
    return ret
    