/* THIS IS CURRENTLY NOT SUBMITTED ON CODEWARS AS A VALID SOLUTION */
// https://www.codewars.com/kata/59f98052120be4abfa000304

// Welcome to the Challenge Edition of Upside-Down Numbers
// In the original kata by @KenKamau you were limited to integers below 2^17. Here, you will be given strings of digits of up to 42 characters in length (upper bound is 10^42 - 1).

// Your task is essentially the same, but an additional challenge is creating a fast, efficient solution.

// Input:
// Your function will receive two strings, each comprised of digits representing a positive integer. These two values will represent the upper and lower bounds of a range.

// Output:
// Your function must return the number of valid upside down numbers within the range of the two input arguments, including both upper and lower bounds.

// What is an Upside-Down Number?
// An upside down number is an integer that appears the same when rotated 180 degrees, as illustrated below.

// 1961 - OK, 88 - OK, 101 - OK, 25 - No

// Example:

// const x = '0',
//       y = '25';
// upsideDown(x,y); //4
// //the valid numbers in the range are 0, 1, 8, and 11
// Additional Notes:
// All inputs will be valid.
// The first argument will always be less than the second argument (ie. the range will always be valid).

function upsideDown(x,y)
{
    var x_len = x.length;
    var y_len = y.length;
    var count = 0;
    while(x_len <= y_len)
    {
        var numStrobo = strobogrammaticGenerator(x_len);
        count += countInRange(numStrobo, +x, +y);
        x_len++;
    }

    return count;
}

function strobogrammaticGenerator(numDigits)
{
    return createStrobos(numDigits, numDigits);
}
 
function createStrobos(num, length)
{     
    if (num == 0)
    {
        return [""];
    }
    if (num == 1)
    {
        return ["1", "0", "8"];
    }
       
    var middles = createStrobos(num - 2, length);
    var result = [];
       
    for (var middle of middles)
    {
        if (num != length)
        {
            result.push("0" + middle + "0");
        }        
        result.push("8" + middle + "8");
        result.push("1" + middle + "1");
        result.push("9" + middle + "6");
        result.push("6" + middle + "9");
    }
    return result;
}
  
function countInRange(arr, start, finish)
{
    var count = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] >= start && arr[i] <= finish)
            {
                count++;
            }     
    }
    return count;
}