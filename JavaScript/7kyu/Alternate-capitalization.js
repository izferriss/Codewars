// https://www.codewars.com/kata/59cfc000aeb2844d16000075

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s)
{
    let upFirst = "";
    let lowFirst = "";
    for(var i = 0; i < s.length; i++)
    {
        if(i % 2 == 0)
        {
            upFirst += s[i].toUpperCase();
            lowFirst += s[i].toLowerCase();
        }
        else
        {
            upFirst += s[i].toLowerCase();
            lowFirst += s[i].toUpperCase();
        }

    }
    return [upFirst, lowFirst];
};