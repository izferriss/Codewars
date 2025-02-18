// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s)
{
    let ret = "";
    s.sort();
    for(var i = 0; i < s[0].length; i++)
    {
        if(i != s[0].length - 1)
        {
            ret += s[0][i] + "***";
        }
        else
        {
            ret += s[0][i];
        }
    }

    return ret;
}