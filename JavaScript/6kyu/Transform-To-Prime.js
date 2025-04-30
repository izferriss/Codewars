// https://www.codewars.com/kata/5a946d9fba1bb5135100007c/javascript

// Task
// Given a list of positive integers, determine the minimum non-negative integer that needs to be inserted so that the sum of all elements becomes a prime number.

// Notes
// The list will always have at least 2 elements.
// All elements will be positive integers (n > 0).
// The list may contain duplicate values.
// The new sum must be the closest prime number that is greater than or equal to the current sum.
// Examples
// [3, 1, 2] ==> Should return 1
// Explanation: The sum is 6
// The closest prime greater than or equal to 6 is 7
// We need to add 1 to make the sum 7 (a prime)

// [2, 12, 8, 4, 6] ==> Should return 5
// Explanation: The sum is 32
// The closest prime greater than or equal to 32 is 37
// We need to add 5 to make the sum 37 (a prime)

// [50, 39, 49, 6, 17, 28] ==> Should return 2
// Explanation: The sum is 189
// The closest prime greater than or equal to 189 is 191
// We need to add 2 to make the sum 191 (a prime)

function minimumNumber(numbers) {
	return nextNum(numbers.reduce((a, b) => a + b, 0));
}
function nextNum(sum) {
	let count = 0;
	while (!isPrime(sum + count)) {
		count++;
	}
	return count;
}
function isPrime(num) {
	return num < 2 ? false : ![...Array(Math.floor(Math.sqrt(num)) + 1).keys()].slice(2).some((i) => num % i === 0);
}