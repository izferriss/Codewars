# https://www.codewars.com/kata/567bf4f7ee34510f69000032

# Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

import re
def is_digit(n):
    return re.findall('[\d]', n)[0] == n if re.findall('[\d]', n) else False