// https://www.codewars.com/kata/57aa218e72292d98d500240f/javascript

// Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

// Heron's formula sqrt(s * (s - a) * (s - b) * (s - c)) where s = (a + b + c) / 2

// Output should have 2 digits precision.

function heron(a, b, c) {
	let s = (a + b + c) / 2;
	return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
