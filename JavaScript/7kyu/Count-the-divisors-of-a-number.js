// https://www.codewars.com/kata/542c0f198e077084c0000c2e

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

function getDivisorsCnt(n)
{
    let divisors = new Set();
    let num = 1;
    while(num <= n)
    {
        if(n % num == 0)
        {
            divisors.add(num);
        }
        num++;
    }

    return divisors.size;
}