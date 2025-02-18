// https://www.codewars.com/kata/5ab363ff6a176b29880000dd

// Complete the function that accepts a valid string and returns an integer.

// Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

// Examples
// "Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
// "Hello, World!"  ==> 91
// "Forty4Three"    ==> 113

function hexHash(code)
{
    let sum = "";
    let res = 0;
    for(let i = 0; i < code.length; i++)
    {
        sum += code.charCodeAt(i).toString(16);
    }
    sum = sum.toString();
    for(var i = 0; i < sum.length; i++)
    {
        if(sum[i] >= '0' && sum[i] <= '9')
        {
            res += parseInt(sum[i]);
        }
    }

    return res;
}