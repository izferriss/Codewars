// https://www.codewars.com/kata/5af15a37de4c7f223e00012d/javascript

// Task
// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys

// Notes

// Return an array/list where Even numbers come first then odds

// Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

// Array/list size is at least 4 .

// Array/list numbers could be a mixture of positives , negatives .

// Have no fear , It is guaranteed that no Zeroes will exists .!alt

// Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

function menFromBoys(arr) {
	const seen = new Set();
	const evens = [];
	const odds = [];

	for (const num of arr) {
		if (!seen.has(num)) {
			seen.add(num);
			if (num % 2 === 0) {
				evens.push(num);
			} else {
				odds.push(num);
			}
		}
	}

	return evens.sort((a, b) => a - b).concat(odds.sort((a, b) => b - a));
}