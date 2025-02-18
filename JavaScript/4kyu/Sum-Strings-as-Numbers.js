// https://www.codewars.com/kata/5324945e2ece5e1f32000370

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a,b) 
{ 
    if(a === '')
    {
        return (b);
    }
    else if(b === '')
    {
        return (a);
    }
    else
    {
        return add(a, b).replace(/^0+/, "");
    }
}

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