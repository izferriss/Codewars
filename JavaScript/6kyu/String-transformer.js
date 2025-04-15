// https://www.codewars.com/kata/5878520d52628a092f0002d0/javascript

// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

function stringTransformer(str) {
	str = str.split(" ").reverse();

	for (let el in str) {
		str[el] = swapCase(str[el]);
	}

	return str.join(" ");
}

function swapCase(str) {
	let res = "";
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (char === char.toUpperCase()) {
			res += char.toLowerCase();
		} else {
			res += char.toUpperCase();
		}
	}
	return res;
}
