// https://www.codewars.com/kata/525f4206b73515bffb000b21

// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add (a, b) 
{
    var result = '';
    var carry = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || carry) 
    {
        carry += ~~a.pop() + ~~b.pop();
        result = carry % 10 + result;
        carry = carry > 9;
    }
    return result;
}