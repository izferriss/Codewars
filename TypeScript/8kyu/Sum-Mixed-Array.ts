// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

export function sumMix(x: any[]): number
{
    let sum = 0;
    for(var i = 0; i < x.length; i++)
    {
        sum += parseInt(x[i]);
    }
    return sum;
}