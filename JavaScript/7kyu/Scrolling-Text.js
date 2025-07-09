// https://www.codewars.com/kata/5a995c2aba1bb57f660001fd/train/javascript

// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// Good luck!

function scrollingText(text) {
	let c = text.charAt(0);
	let rem = text.slice(1);
	let scroll = rem + c;
	let result = [text.toUpperCase()];

	while (scroll !== text) {
		result.push(scroll.toUpperCase());
		c = scroll.charAt(0);
		rem = scroll.slice(1);
		scroll = rem + c;
	}
	return result;
}