// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

export function findShort(s: string): number 
{
    let splitArr = s.split(" ");
    let shortest = splitArr[0].length;

    for(var i = 1; i < splitArr.length; i++)
    {
        if(splitArr[i].length < shortest)
        {
            shortest = splitArr[i].length;
        }
    }
    return shortest;
}