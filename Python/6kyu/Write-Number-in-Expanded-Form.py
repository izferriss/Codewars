# https://www.codewars.com/kata/5842df8ccbd22792a4000245

# You will be given a number and you will need to return it as a string in Expanded Form. For example:

# expanded_form(12) # Should return '10 + 2'
# expanded_form(42) # Should return '40 + 2'
# expanded_form(70304) # Should return '70000 + 300 + 4'
# NOTE: All numbers will be whole numbers greater than 0.

def expanded_form(num):
    length = len(str(num))
    output = ""
    place = 0
    while(length > 0):
        if(str(num)[place] != "0"):
            output = output + str(num)[place]
            temp = length
            while (temp > 1):
                output = output + "0" 
                temp -= 1
            if(length - 1 > 0):
                output = output + " + "
        length -= 1
        place += 1
        
    if(output[len(output) - 3:] == " + "):
        return output[:len(output) - 3]
    return output
    