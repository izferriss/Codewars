// https://www.codewars.com/kata/5300901726d12b80e8000498

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

function fizzbuzz(n)
{
    let result = Array.from({length: n}, (_, i) => i + 1)
  
    for(var i = 0; i < result.length; i++)
    {
        if(result[i] % 3 == 0 && result[i] % 5 == 0)
        {
            result.splice(i, 1, "FizzBuzz");
        }
        else if(result[i] % 3 == 0)
        {
            result.splice(i, 1, "Fizz");
        }
        else if(result[i] % 5 == 0)
        {
            result.splice(i, 1, "Buzz");
        }
    }

    return result;
}

