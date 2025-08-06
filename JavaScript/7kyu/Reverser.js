// https://www.codewars.com/kata/58069e4cf3c13ef3a6000168/javascript

// Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// // Please do not use
// const forbidden = "
//                   '
//                   `
//                   string
//                   fixed
//                   precision
//                   .keys

function reverse(n) {
	let sign = Math.sign(n);
	let absNumber = Math.abs(n);
	let reversedNumber = 0;

	while (absNumber > 0) {
		let lastDigit = absNumber % 10;
		reversedNumber = reversedNumber * 10 + lastDigit;
		absNumber = Math.floor(absNumber / 10);
	}

	return reversedNumber * sign;
}