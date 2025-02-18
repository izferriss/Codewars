# https://www.codewars.com/kata/57a386117cb1f31890000039

# Write function parse_float which takes a string/list and returns a number or 'none' if conversion is not possible.

def parse_float(string):
    if type(string) == list or type(string) == dict: return None
    print(type(string))
    try:
        float(string)
        return float(string)
    except ValueError:
        return None