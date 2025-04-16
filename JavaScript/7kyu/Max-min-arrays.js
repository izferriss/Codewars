// https://www.codewars.com/kata/5a090c4e697598d0b9000004/javascript

// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!

function solve(arr){
    let res = [];
    while(arr.length > 0)
    {
        res.push(Math.max(...arr));
        arr.splice(arr.indexOf(Math.max(...arr)), 1);
        if(arr.length === 0)
        {
            break;
        }
        res.push(Math.min(...arr));
        arr.splice(arr.indexOf(Math.min(...arr)), 1);
    }
    return res;
};