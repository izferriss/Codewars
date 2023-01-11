// https://www.codewars.com/kata/5672682212c8ecf83e000050

// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// Task:
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).

// Example:
// dbl_linear(10) should return 22

// Note:
// Focus attention on efficiency

function dblLinear(n)
{
    let sequence = [1];
    let i1 = 0, i2 = 0, ctrl = 0;
    while(i1 + i2 < n + ctrl)
    {
        let y = 2 * sequence[i1] + 1;
        let z = 3 * sequence[i2] + 1;
        
        if(y < z)
        {
            sequence.push(y);
            i1++;
        }
        else if(y > z)
        {
            sequence.push(z);
            i2++;
        }
        else
        {
            sequence.push(y);
            i1++;
            i2++;
            ctrl++;
        }
    }
    return sequence[n];
}