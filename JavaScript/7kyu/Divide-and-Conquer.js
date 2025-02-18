// https://www.codewars.com/kata/57eaec5608fed543d6000021

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

function divCon(x)
{
    let stringSum = 0;
    let numSum = 0;
    for(var i = 0; i < x.length; i++)
    {
        if(typeof(x[i]) == "string"){stringSum += parseInt(x[i]);}
        if(typeof(x[i]) == "number"){numSum += x[i];}
    }
    return numSum - stringSum;
}