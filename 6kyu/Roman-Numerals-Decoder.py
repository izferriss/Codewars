# https://www.codewars.com/kata/51b6249c4612257ac0000005

# Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

# Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

# Example:

# solution('XXI') # should return 21
# Help:

# Symbol    Value
# I          1
# V          5
# X          10
# L          50
# C          100
# D          500
# M          1,000

def solution(roman):
    #pos         0    1    2     3    4     5    6     7    8     9    10   11   12 
    rn     = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    base10 = [1000, 900, 500,  400, 100,   90,  50,   40,  10,    9,    5,   4,   1];
    
    output = 0
    i = 0
    while i < len(roman):
        if roman[i] == rn[4]:
            if  i + 1 != len(roman) and roman[i + 1] == rn[0]:
                output += base10[1]
                i += 1
            elif i + 1 != len(roman) and roman[i + 1] == rn[2]:
                output += base10[3]
                i += 1
            else:
                output += base10[4]
        elif roman[i] == rn[8]:
            if i + 1 != len(roman) and roman[i + 1] == rn[4]:
                output += base10[5]
                i += 1
            elif i + 1 != len(roman) and roman[i + 1] == rn[6]:
                output += base10[7]
                i += 1
            else:
                output += base10[8]
        elif roman[i] == rn[12]:
            if i + 1 != len(roman) and roman[i + 1] == rn[8]:
                output += base10[9];
                i += 1
            elif i + 1 != len(roman) and roman[i + 1] == rn[10]:
                output += base10[11]
                i += 1
            else:
                output += base10[12]
        elif roman[i] == rn[0]:
            output += base10[0]
        elif roman[i] == rn[2]:
            output += base10[2]
        elif roman[i] == rn[10]:
            output += base10[10]
        else:
            output += base10[6]
        i += 1
        
    return output