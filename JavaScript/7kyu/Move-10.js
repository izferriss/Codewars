// https://www.codewars.com/kata/57cf50a7eca2603de0000090/javascript

// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

function moveTen(s) {
	const a2 = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
	const arr = s.split("").map((v) => (v = a2.indexOf(v) + 10));
	return arr.map((v) => (v = a2[v])).join("");
}