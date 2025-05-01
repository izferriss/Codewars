// https://www.codewars.com/kata/5939ab6eed348a945f0007b2/javascript

// Given a string of space separated words, return the longest word.
// If there are multiple longest words, return the rightmost longest word.

// Examples
// "red white blue"  =>  "white"
// "red blue gold"   =>  "gold"

function longestWord(stringOfWords) {
	let split = stringOfWords.split(" ");
	let long = split[0];
	for (let i = 1; i < split.length; i++) {
		long = split[i].length >= long.length ? split[i] : long;
	}
	return long;
}