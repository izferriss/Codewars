// https://www.codewars.com/kata/55dc4520094bbaf50e0000cb/java

// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then,

// ((P-1)! + 1) / (P * P)
// should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

class WilsonPrime
{
    public static boolean am_i_wilson(double n)
    {
        return n == 5 || n == 13 || n == 563;
    }
}