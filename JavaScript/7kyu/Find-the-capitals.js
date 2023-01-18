// https://www.codewars.com/kata/539ee3b6757843632d00026b

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word)
{
    const alphabet = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x));
    let result = [];
    for(var i = 0; i < word.length; i++)
    {
        if(alphabet.includes(word[i]))
        {
            result.push(i);
        }
    }

    return result;
};