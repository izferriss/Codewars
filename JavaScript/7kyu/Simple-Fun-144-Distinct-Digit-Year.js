// https://www.codewars.com/kata/58aa68605aab54a26c0001a6

// Task
// The year of 2013 is the first year after the old 1987 with only distinct digits.

// Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.

// Input/Output
// [input] integer year
// 1000 ≤ year ≤ 9000

// [output] an integer
// the minimum year number that is strictly larger than the input number year and all its digits are distinct.

function distinctDigitYear(year)
{
    for(var i = year + 1; i <= 9012; i++)
    {
        let flag = true;
        let asStr = i.toString().split("");
        if(asStr[0] == asStr[1] || asStr[0] == asStr[2] || asStr[0] == asStr[3] || asStr[1] == asStr[2] || asStr[1] == asStr[3] || asStr[2] == asStr[3])
        {
            flag = false;
        }
        if(flag){return i;}
    }
}