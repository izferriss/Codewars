/* THIS IS CURRENTLY NOT SUBMITTED ON CODEWARS AS A VALID SOLUTION */

// https://www.codewars.com/kata/587c23f6289b36bd1900003e

// You will be given some positive integers. Your task is to use all of these integers to combine the largest and smallest prime numbers.

// Input
// An integer array nums:

// [1,2,3,4]

// Output
// An array that contains 2 elements(smallest prime and largest prime).

// [1423, 4231]

// Note:
// The length of nums always less than 10.
// The integer in nums always be 1 digit or 2 digits(1-99). It should keep the order in the combination. For example, 13 can not using as 31 or a single digit 1 or 3. It can only using as 13.
// All of the integers should be used, but can used only once.
// If the given integers can only combine 1 prime, return an array contains 1 prime.
// If there is no possible prime combination, return []
// Examples

// primeCombination([1,2,3,4]) === [1423, 4231]

// primeCombination([9,9,9,3,6,1]) === [136999, 999631]

// primeCombination([3,7]) === [37,73]

// primeCombination([3,5]) === [53]

// primeCombination([1,3,5]) === []

// primeCombination([2]) === [2]

var permArr = [];
var usedChars = [];

function primeCombination(nums)
{
    //short circuit
    if(nums.length == 0 || nums.length == 1)
    {
        if(nums.length == 0)
        {
            return [];
        }
        else
        {
            if(isPrime(nums[0]))
            {
                return [nums[0]];
            }
        }
    }

    var results = filterPrimes(permute(nums));
    resetGlobals();
    console.log("globals reset");
    var min, max;

    if(results.length == 0)
    {
        return [];
    }
    else if(results.length == 1)
    {
        return [+asString(results[0])];
    }
    else
    {
        min = +asString(results[Math.floor((results.length - 1) / 2)]);
        max = +asString(results[Math.floor((results.length - 1) / 2) + 1]);
    }

    for(var i = 0; i < results.length; i++)
    {
        if(isPrime(+asString(results[i])))
        {
            if(+asString(results[i]) > max)
            {
                max = +asString(results[i]);
            }
            if(+asString(results[i]) < min)
            {
                min = +asString(results[i]);
            }
        }
    }
    if(isPrime(min) && isPrime(max))
    {
        return [min, max];
    }
    else if(isPrime(min) && !isPrime(max))
    {
        return [min];
    }
    else if(!isPrime(min) && isPrime(max))
    {
        return [max];
    }
    else
    {
        return [];
    }  
}

function permute(input) 
{
    for (var i = 0; i < input.length; i++)
    {
        var ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0)
        {
            permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr
};

function filterPrimes(arr)
{
    arr.forEach(sub =>
    {
        if(!isPrime(+asString(sub)))
        {
            arr = arr.filter(item => item !== sub);
        }
    });
    console.log("filtration complete");
    return arr;
}

function isPrime(num)
{
    if (num == 1)
    {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++)
    {
        if (num % i == 0)
        {
            return false;
        }      
    }
    return true;
}

function asString(arr)
{
    var output = "";
    for(var i = 0; i < arr.length; i++)
    {
        output += arr[i];
    }
    return output;
}

function resetGlobals()
{
    permArr = [];
    usedChars = [];
}
