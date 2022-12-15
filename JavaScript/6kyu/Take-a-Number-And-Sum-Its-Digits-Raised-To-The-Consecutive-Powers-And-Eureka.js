// https://www.codewars.com/kata/5626b561280a42ecc50000d1

// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89=8^1+9^2 

// The next number in having this property is 135:

// See this property again: 135 = 1^1 + 3^2 + 5^3
 

// Task
// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a,b] the function should output an empty list.

// 90, 100 --> []
// Enjoy it!!

function sumDigPow(a, b)
{
    let results = new Set();
    for(var i = a; i < b; i++)
    {
        let digits = i.toString().split("");
        let sum = 0;
        if(i > 9)
        {
            for(var j = 1; j <= digits.length; j++)
            {
                sum += Math.pow(parseInt(digits[j - 1]), j);
            }
        }
        else
        {
            if(i > 0 && i < 10)
            {
                sum = i;
            }
        }
      
        if(sum == i)
        {
            results.add(sum);
        }
    }
    return Array.from(results);
}
  
  