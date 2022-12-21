// https://www.codewars.com/kata/544aed4c4a30184e960010f4

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer)
{
    let divs = new Set();
    let attempt = 2;
    while(attempt < integer)
    {
        if(integer % attempt == 0)
        {
            divs.add(attempt);
        }
        attempt++;
    }

    return Array.from(divs).length > 0 ? Array.from(divs) : (integer + " is prime");
};