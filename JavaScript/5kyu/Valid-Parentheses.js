// https://www.codewars.com/kata/52774a314c2333f0a7000688

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens)
{
    const stack = [];
    for(var i = 0; i < parens.length; i++)
    {
        const top = stack[stack.length - 1];
        if (parens[i] === '(')
        {
            stack.push(parens[i]);
        }
        else if (parens[i] === ')' && top === '(' && stack.length !== 0)
        {
            stack.pop();
        }
        else
        {
            return false;
        }
    }
    return stack.length == 0;
}