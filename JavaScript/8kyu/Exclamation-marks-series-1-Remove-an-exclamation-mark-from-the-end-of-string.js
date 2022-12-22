// https://www.codewars.com/kata/57fae964d80daa229d000126


// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

function remove (string)
{
    return string.substring(0, string.indexOf("!", string.length - 2) != - 1 ? string.length - 1: string.length);
}