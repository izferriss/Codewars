// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s)
{
    let str = "";
    for(var i = 0; i < s.length; i++)
    {
        let count = 0;
        while(count <= i)
        {
            if(count == 0)
            {
                str += s[i].toUpperCase();
            }
            else
            {
                str += s[i].toLowerCase();
            }
            count++;
        }
        
        if(i != s.length - 1)
        {
            str += "-";
        }
    }

    return str;
}