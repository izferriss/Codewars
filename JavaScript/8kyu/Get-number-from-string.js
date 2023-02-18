// https://www.codewars.com/kata/57a37f3cbb99449513000cd8

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s)
{
    return parseInt(s.replace(/[^0-9]/gi, ""));
}