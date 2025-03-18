// https://www.codewars.com/kata/593b1909e68ff627c9000186/train/javascript

// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// The input can be modified

function nicknameGenerator(name) {
  return !name[3]
    ? "Error: Name too short"
    : name[2] === "a" ||
      name[2] === "e" ||
      name[2] === "i" ||
      name[2] === "o" ||
      name[2] === "u"
    ? name.substr(0, 4)
    : name.substr(0, 3);
}