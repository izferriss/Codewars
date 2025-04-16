// https://www.codewars.com/kata/5a662a02e626c54e87000123/train/javascript

// Extra perfect number is the number that first and last bits are set bits.

// Given a positive integer N , Return the extra perfect numbers in range from 1 to N .

function extraPerfect(n)
{
    let res = [];
    for(let i = 1; i <= n; i +=2)
    {
        res.push(i);
    }
    return res;
}