// https://www.codewars.com/kata/559a28007caad2ac4e000083

// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// [SEE WEBSITE ABOVE]

// Hint:
// See fibonacci sequence

// Ref:
// http://oeis.org/A000045

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5)  should return 80

function perimeter(n)
{
    return fibSum(n + 1) * 4;
}

function fibSum(n)
{
    let fib = [];
    if (n <= 0)
    {
        return 0;
    }
    
    fib[0] = 0;
    fib[1] = 1;
 
    let sum = fib[0] + fib[1];
 
    for(let i = 2; i <= n; i++)
    {
        fib[i] = fib[i - 1] + fib[i - 2];
        sum += fib[i];
    }

    return sum;
}