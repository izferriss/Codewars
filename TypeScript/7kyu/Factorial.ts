// https://www.codewars.com/kata/57a049e253ba33ac5e000212

// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

export function factorial(n: number):number
{
    if (n == 0)
    {
        return 1;
    }
    else
    {
        return (n * factorial(n -1));
    }
}