# https://www.codewars.com/kata/570597e258b58f6edc00230d

# This is a spin off of my first kata.

# You are given a string containing a sequence of character sequences separated by commas.

# Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

# If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

# Examples
# "1,2,3"      =>  "2"
# "1,2,3,4"    =>  "2 3"
# "1,2,3,4,5"  =>  "2 3 4"

# ""     =>  NULL
# "1"    =>  NULL
# "1,2"  =>  NULL

def array(string):
    if string.split() == []: return None
    x = string.split()[0].split(",")
    result = ""
    count = 0
    for i in x:
        if count != 0 and count != (len(x) - 1):
            result += str(i) + " "
        count += 1
    return result.rstrip() if result.rstrip() != "" else None