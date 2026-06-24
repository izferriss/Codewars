// https://www.codewars.com/kata/56bf3287b5106eb10f000899/train/javascript

// Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

// Vowels are (in this kata): a, e, i, o, u

// Note: all provided input strings are lowercase.

// Examples
// "day"    ==>  "dya"
// "apple"  ==>  "pplae"

function moveVowel(input) {
    return input.replace(/[aeiou]/g, '') + input.replace(/[^aeiou]/g, '');
}