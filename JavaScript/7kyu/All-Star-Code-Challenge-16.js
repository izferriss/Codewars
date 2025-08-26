// https://www.codewars.com/kata/586566b773bd9cbe2b000013/train/javascript

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #16

// Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.

// noRepeat("aabbccdde") // => "e"
// noRepeat("wxyz") // => "w"
// noRepeat("testing") // => "e"
// Note: ONLY letters from the english alphabet will be used as input There will ALWAYS be at least one non-repeating letter in the input string

function noRepeat(str) {
	const charCounts = {};

	for (const char of str) {
		charCounts[char] = (charCounts[char] || 0) + 1;
	}

	for (const char of str) {
		if (charCounts[char] === 1) {
			return char;
		}
	}

	return null;
}