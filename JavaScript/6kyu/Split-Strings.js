// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str)
{
    var result = [];
    for(var i = 0; i < str.length; i++)
    {
        if(i + 1 < str.length)
        {
            result.push(str[i] + str[i + 1]);
            i++;
        }
        else
        {
            result.push(str[i] + '_');
        }
    }
    return result;
}