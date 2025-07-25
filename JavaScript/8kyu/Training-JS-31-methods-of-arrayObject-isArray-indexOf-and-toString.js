// https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript

// Task
// Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

// If arr is not an array, function should return:

// "It's a fake array"
// If arr contains elements 5 and 13, function should return:

// "It's a black array"
// If arr contains neither 5 nor 13, function should return:

// "It's a white array"
// Examples
// blackAndWhite(5,13) should return "It's a fake array"
// blackAndWhite([5,13]) should return "It's a black array"
// blackAndWhite([5,12]) should return "It's a white array"

function blackAndWhite(arr) {
	return `It's a ${
		!Array.isArray(arr)
			? "fake"
			: arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1
			? "black"
			: "white"
	} array`;
}
