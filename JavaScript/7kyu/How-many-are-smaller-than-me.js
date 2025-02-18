// https://www.codewars.com/kata/56a1c074f87bc2201200002e

// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

function smaller(nums) 
{
    var results = [];
    var index = 0;
    var count = 0;
    while(index < nums.length - 1)
    {
        for(var i = index; i < nums.length - 1; i++)
        {
            if(nums[i + 1] < nums[index])
            {
                count++;
            }
        }
        results.push(count);
        count = 0;
        index++;
    }
    results.push(0);
    return results;
}