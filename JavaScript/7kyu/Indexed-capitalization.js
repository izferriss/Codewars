// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/javascript

// Given a string of lowercase letters and an array of integer indices, capitalize all letters at the given indices. If an index is beyond the string, it should be ignored.

// Examples:
// "abcdef", [1,2,5]     ==> "aBCdeF"
// "abcdef", [1,2,5,100] ==> "aBCdeF" // There is no index 100.
// Good luck!

function capitalize(string, indices) {
	let res = "";
	for (let i = 0; i < string.length; i++) {
		if (indices.indexOf(i) !== -1) {
			res += string[i].toUpperCase();
		} else {
			res += string[i];
		}
	}
	return res;
}