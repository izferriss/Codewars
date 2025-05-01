// https://www.codewars.com/kata/55d410c492e6ed767000004f/javascript

// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.

function vowel2index(str) {
	let v = ["a", "e", "i", "o", "u"];
	let split = str.split("");
	for (let i = 0; i < split.length; i++) {
		split[i] = v.indexOf(split[i].toLowerCase()) !== -1 ? i + 1 : split[i];
	}
	return split.join("");
}