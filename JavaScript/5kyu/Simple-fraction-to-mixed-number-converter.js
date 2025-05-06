// https://www.codewars.com/kata/556b85b433fb5e899200003f/train/javascript

// Task
// Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

// [sign]a b/c

// where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).

// If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

// Division by zero should raise an error (preferably, the standard zero division error of your language).

// Value ranges
// -10 000 000 < x < 10 000 000
// -10 000 000 < y < 10 000 000
// Examples
// Input: 42/9, expected result: 4 2/3.
// Input: 6/3, expedted result: 2.
// Input: 4/6, expected result: 2/3.
// Input: 0/18891, expected result: 0.
// Input: -10/7, expected result: -1 3/7.
// Inputs 0/0 or 3/0 must raise a zero division error.
// Note
// Make sure not to modify the input of your function in-place, it is a bad practice.

function mixedFraction(s) {
	let numerator = parseInt(s.split("/")[0]);
	let denominator = parseInt(s.split("/")[1]);

	if (denominator === 0) {
		throw new Error("You cannot divide by zero!");
	}
	if (numerator === 0) {
		return "0";
	}

	let sign = (numerator < 0) ^ (denominator < 0) ? "-" : "";
	numerator = Math.abs(numerator);
	denominator = Math.abs(denominator);

	let whole = Math.floor(numerator / denominator);
	let remainder = numerator % denominator;

	if (remainder === 0) {
		return sign + whole.toString();
	}

	let gcd = (a, b) => {
		while (b) {
			[a, b] = [b, a % b];
		}
		return a;
	};

	let commonDivisor = gcd(remainder, denominator);
	let simplifiedRemainder = remainder / commonDivisor;
	let simplifiedDenominator = denominator / commonDivisor;

	if (whole === 0) {
		return (
			sign +
			simplifiedRemainder.toString() +
			"/" +
			simplifiedDenominator.toString()
		);
	} else {
		return (
			sign +
			whole.toString() +
			" " +
			simplifiedRemainder.toString() +
			"/" +
			simplifiedDenominator.toString()
		);
	}
}