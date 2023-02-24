// https://www.codewars.com/kata/56abc5e63c91630882000057

// Make a function that receives a value, val and outputs the smallest higher number than the given value, and this number belong to a set of positive integers that have the following properties:

// their digits occur only once

// they are odd

// they are multiple of three

// nextNumb(12) == 15

// nextNumb(13) == 15

// nextNumb(99) == 105

// nextNumb(999999) == 1023459

// nextNumber(9999999999) == "There is no possible number that
// fulfills those requirements"
// Enjoy the kata!!

function nextNumb(val)
{ 
    for(var i = val + 1; i <= 9999999999; i++){if(doesConform(i)){return i;}}
    return "There is no possible number that fulfills those requirements";
}

function doesConform(num)
{
    return isUnique(num) && isOdd(num) && isDivThree(num);
}

function isUnique(num)
{
    return new Set(num.toString()).size == num.toString().length;
}

function isOdd(num)
{
    return num % 2 != 0;
}

function isDivThree(num)
{
    return num % 3 == 0;
}