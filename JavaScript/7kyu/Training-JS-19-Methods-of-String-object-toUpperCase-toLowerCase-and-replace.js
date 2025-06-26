// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript

// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

// We translate the sentence into an alien language according to the following rules:

// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

// for example:

// alienLanguage("My name is John") should return "My NAMe Is JOHn"
// alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
// alienLanguage("Hello World") should return "HELLo WORLd"
// A small hint: The first conversion of the entire string will make the code easier

function alienLanguage(str) {
	let splt = str.split(" ");
	for (let i = 0; i < splt.length; i++) {
		splt[i] =
			splt[i].substring(0, splt[i].length - 1).toUpperCase() +
			splt[i].substring(splt[i].length - 1).toLowerCase();
	}
	return splt.join(" ");
}