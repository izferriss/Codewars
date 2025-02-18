// https://www.codewars.com/kata/580a4734d6df748060000045

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array)
{
    let desc = [...array];
    let asc = [...array];
    asc = asc.sort((a,b) => a - b);
    desc = desc.sort((a,b) => b - a);
    let isAsc = true, isDec = true;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] != asc[i])
        {
            isAsc = false;
        }
        if(array[i] != desc[i])
        {
            isDec = false;
        }
    }
    return isAsc ? "yes, ascending" : isDec ? "yes, descending" : "no";
}