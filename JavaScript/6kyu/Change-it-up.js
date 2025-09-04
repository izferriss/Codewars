// https://www.codewars.com/kata/58039f8efca342e4f0000023/javascript

// Create a function that takes a string as a parameter and does the following, in this order:

// Replaces every letter with the letter following it in the alphabet (see note below)
// Makes any vowels capital
// Makes any consonants lower case
// Note:

// the alphabet should wrap around, so Z becomes A
// in this kata, y isn't considered as a vowel.
// So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

function changer(str) {
	let result = "";
	const vowels = "aeiouAEIOU";

	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		if (char >= "a" && char <= "z") {
			char = String.fromCharCode(
				((char.charCodeAt(0) - 97 + 1) % 26) + 97
			);
		} else if (char >= "A" && char <= "Z") {
			char = String.fromCharCode(
				((char.charCodeAt(0) - 65 + 1) % 26) + 65
			);
		}

		if (vowels.includes(char)) {
			result += char.toUpperCase();
		} else {
			result += char.toLowerCase();
		}
	}
	return result;
}