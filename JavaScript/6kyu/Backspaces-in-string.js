// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s)
{
    s = s.replace(/[#]/gi, "\b");
    while (s.indexOf("\b") != -1)
    {
        s = s.replace(/.?\x08/, "");
    }
    return s;
}