// https://www.codewars.com/kata/58daa7617332e59593000006

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array)
{
    let max = -1;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i].toString().length > max.toString().length){max = array[i];}
    }
    return max;
}