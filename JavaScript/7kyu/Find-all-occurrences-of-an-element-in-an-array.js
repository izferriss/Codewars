// https://www.codewars.com/kata/59a9919107157a45220000e1/javascript

// Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

// If n is not in the given array, return an empty array [].

// Assume that n and all values in the given array will always be integers.

// Example:

// findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]

const findAll = (array, n) => {
	const res = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] === n) {
			res.push(i);
		}
	}
	return res;
};
