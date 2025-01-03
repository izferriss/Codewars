// https://www.codewars.com/kata/5b1b27c8f60e99a467000041

// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word : c od e w ar s (4 letters removed)
// Second word : ha c k er r a nk (6 letters removed)
// Result : 10
// Hints
// A word is an anagram of another word if they have the same letters (usually in a different order).
// Do not worry about case. All inputs will be lowercase.
// When you're done with this kata, check out its big brother/sister : https://www.codewars.com/kata/hardcore-anagram-difference

function anagramDifference(str1,str2)
{
    let count = 0;

    //create lowercase alphabet array
    let charArr = Array.from(Array(26)).map((e, i) => i + 97).map((x) => String.fromCharCode(x));

    //init map
    let charMap = {};
    for(var i = 0; i < charArr.length; i++)
    {
        charMap[charArr[i]] = 0;
    }
    
    //increment all str1 character values in map
    for (var i = 0; i < str1.length; i++)
    {
        charMap[str1[i]] = charMap[str1[i]] + 1;
    }

    //decrement all str2 character values in map
    for (var i = 0; i < str2.length; i++)
    {
        charMap[str2[i]] = charMap[str2[i]] - 1;
    }
    
    //if there's a number that isn't zero, count it
    for (let i in charMap)
    {
        if (charMap[i] !== 0)
        {
            count += Math.abs(charMap[i]);
        }
    }
    
    return count;
}