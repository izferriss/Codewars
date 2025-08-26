// https://www.codewars.com/kata/57fd696e26b06857eb0011e7/train/javascript

// Vowel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). This kata is based on vowel harmony in Hungarian.

// Task:
// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

// Vowel Harmony Rules (simplified)
// When the last vowel in the word is

// a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
// a back vowel (a, á, o, ó, u, ú) the suffix is -nak
// Examples:
// dative("ablak") == "ablaknak"
// dative("szék") == "széknek"
// dative("otthon") == "otthonnak"
// Preconditions:
// To keep it simple: All words end with a consonant :)
// All strings are unicode strings.
// There are no grammatical exceptions in the tests.

function dative(word) {
	const nek = ["e", "é", "i", "í", "ö", "ő", "ü", "ű"];
	const nak = ["a", "á", "o", "ó", "u", "ú"];

	let nekIndex = -1;
	let nakIndex = -1;

	for (let i = 0; i < nek.length; i++) {
		const element = nek[i];
		const currentIndex = word.indexOf(element);

		if (currentIndex !== -1) {
			if (nekIndex === -1 || currentIndex < nekIndex) {
				nekIndex = currentIndex;
			}
		}
	}

	for (let i = 0; i < nak.length; i++) {
		const element = nak[i];
		const currentIndex = word.indexOf(element);

		if (currentIndex !== -1) {
			if (nakIndex === -1 || currentIndex < nakIndex) {
				nakIndex = currentIndex;
			}
		}
	}

	return nekIndex > nakIndex ? word + "nek" : word + "nak";
}