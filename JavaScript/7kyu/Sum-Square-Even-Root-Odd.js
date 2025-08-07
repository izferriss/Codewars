// https://www.codewars.com/kata/5a4b16435f08299c7000274f/javascript

// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

// The list will never be empty and will only contain values that are greater than or equal to zero.

// Good luck!

const sumSquareEvenRootOdd = (ns) => {
	for (let i = 0; i < ns.length; i++) {
		if (ns[i] === 0) {
			ns[i] = 0;
		} else if (ns[i] % 2 === 0) {
			ns[i] = ns[i] ** 2;
		} else {
			ns[i] = Math.sqrt(ns[i]);
		}
	}

	return +ns.reduce((acc, v) => (acc += v)).toFixed(2);
};