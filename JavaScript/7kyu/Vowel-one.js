// https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript

// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

function vowelOne(s) {
	let v = ["a", "e", "i", "o", "u"];
	let r = "";
	for (let i = 0; i < s.length; i++) {
		v.indexOf(s[i].toLowerCase()) !== -1 ? (r += "1") : (r += "0");
	}
	return r;
}