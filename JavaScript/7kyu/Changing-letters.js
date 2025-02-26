// https://www.codewars.com/kata/5831c204a31721e2ae000294/javascript

// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap (string) {
    return string.replace(/[aeiou]/g, val => val.toUpperCase());
  }