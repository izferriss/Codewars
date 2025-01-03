// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d

// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n)
{
    let sum = 0;
    let ans = 0;
    let denom = 1;
    while(ans != 1)
    {
        ans = ~~(n / denom);
        sum += ans;
        denom *= 2;
    }
    return sum;
}
