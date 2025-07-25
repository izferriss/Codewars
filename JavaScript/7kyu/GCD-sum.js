// https://www.codewars.com/kata/5dd259444228280032b1ed2a/javascript

// Given the sum and gcd of two numbers, return those two numbers in ascending order. If the numbers do not exist, return -1, (or NULL in C, tuple (-1,-1) in C#, pair (-1,-1) in C++,None in Rust, array {-1,-1}  in Java and Golang).

// For example:
// Given sum = 12 and gcd = 4...

// solve(12,4) = [4,8]. The two numbers 4 and 8 sum to 12 and have a gcd of 4.

// solve(12,5) = -1. No two numbers exist that sum to 12 and have gcd of 5.

// solve(10,2) = [2,8]. Note that [4,6] is also a possibility but we pick the one with the lower first element: 2 < 4, so we take [2,8].
// More examples in test cases.

// Good luck!

function solve(s, g) {
	if (s % g !== 0) {
		return -1;
	}

	const targetSumOfCoprimes = s / g;

	for (let x = 1; x * 2 <= targetSumOfCoprimes; x++) {
		const y = targetSumOfCoprimes - x;

		if (gcdOfTwoNumbers(x, y) === 1) {
			const num1 = x * g;
			const num2 = y * g;
			return [num1, num2].sort((a, b) => a - b);
		}
	}

	return -1;
}

function gcdOfTwoNumbers(a, b) {
	if (b === 0) {
		return a;
	}
	return gcdOfTwoNumbers(b, a % b);
}
