// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers)
{
    var count = 0;
    var outlierIsEven = false;
    
    for(let i = 0; i < integers.length; i++)
    {
        if(integers[i] % 2 == 0){count++;}
        if(count > 1){outlierIsEven = false; break;}
        else{outlierIsEven = true;}
    }
    if(outlierIsEven)
    {
        for(let i = 0; i < integers.length; i++)
        {
            if(integers[i] % 2 == 0){return integers[i];}
        }
    }
    else
    {
        for(let i = 0; i < integers.length; i++)
        {
            if(integers[i] % 2 != 0){return integers[i];}
        }
    }
}