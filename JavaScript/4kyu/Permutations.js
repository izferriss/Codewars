// https://www.codewars.com/kata/5254ca2719453dcc0b00027d

// In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

function permutations(str)
{
    if (str.length < 2)
    {
        return [str];
    }

    var results = [];

    for (var i = 0; i < str.length; i++)
    {
        var char = str[i];

        if (str.indexOf(char) != i)
        {
            continue;
        }

        var remaining = str.slice(0, i) + str.slice(i + 1, str.length);

        for (var sub of permutations(remaining))
        {
            results.push(char + sub);
        }    
    }
    
    return results;
}