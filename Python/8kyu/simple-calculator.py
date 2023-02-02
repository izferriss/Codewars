# https://www.codewars.com/kata/5810085c533d69f4980001cf

# You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

# Your function will accept three arguments:
# The first and second argument should be numbers.
# The third argument should represent a sign indicating the operation to perform on these two numbers.

# if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

# Example:
# calculator(1, 2, '+') => 3
# calculator(1, 2, '$') # result will be "unknown value"
# Good luck!

def calculator(x,y,op):
    return "unknown value" if op not in ['+', '-', '/', '*'] or not str(x).isdigit() or not str(y).isdigit() else eval(f'{x}{op}{y}')