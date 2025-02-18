// https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124

// Definition (Primorial Of a Number)
// Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

// Task
// Given a number N , calculate its primorial.

// Notes
// Only positive numbers will be passed (N > 0) 

// Input >> Output Examples:
// numPrimorial (3) ==> return (30)
// Explanation:
// Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .

import 'dart:math';

int numPrimorial(int n) 
{
    var prod = 1;
    var count = 0;
    for(var i = 2; count < n; i++)
    {
        if(isPrime(i))
        {
            prod *= i;
            count++;
        }
    }
    return prod;
}

bool isPrime(int n)
{
    if (n == 1)
    {
        return false;
    }

    for (var i = 2; i <= sqrt(n); i++)
    {
        if (n % i == 0)
        {
            return false;
        }      
    }
    return true;
}