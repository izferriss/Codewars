// https://www.codewars.com/kata/545afd0761aa4c3055001386

// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

function take(arr, n)
{
    if(arr.length == 0)
    {
        return [];
    }
    else if(n >= arr.length)
    {
        return arr;
    }
    else
    {
        let result = [];
        for(var i = 0; i < n; i++)
        {
            result.push(arr[i]);
        }

        return result;
    }
}