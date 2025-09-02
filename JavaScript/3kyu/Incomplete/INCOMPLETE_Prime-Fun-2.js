/* THIS IS CURRENTLY NOT SUBMITTED ON CODEWARS AS A VALID SOLUTION */

// https://www.codewars.com/kata/587c23f6289b36bd1900003e

// You will be given some positive integers. Your task is to use all of these integers to combine the largest and smallest prime numbers.

// Input
// An integer array nums:

// [1,2,3,4]

// Output
// An array that contains 2 elements(smallest prime and largest prime).

// [1423, 4231]

// Note:
// The length of nums always less than 10.
// The integer in nums always be 1 digit or 2 digits(1-99). It should keep the order in the combination. For example, 13 can not using as 31 or a single digit 1 or 3. It can only using as 13.
// All of the integers should be used, but can used only once.
// If the given integers can only combine 1 prime, return an array contains 1 prime.
// If there is no possible prime combination, return []
// Examples

// primeCombination([1,2,3,4]) === [1423, 4231]

// primeCombination([9,9,9,3,6,1]) === [136999, 999631]

// primeCombination([3,7]) === [37,73]

// primeCombination([3,5]) === [53]

// primeCombination([1,3,5]) === []

// primeCombination([2]) === [2]

function primeCombination(nums) {
	let smallestPrime = Infinity;
	let largestPrime = -Infinity;

	function isPrime(num) {
		if (num <= 1) return false;
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) return false;
		}
		return true;
	}

	function generatePermutations(arr, currentPermutation) {
		if (arr.length === 0) {
			const num = parseInt(currentPermutation.join(""));
			if (isPrime(num)) {
				smallestPrime = Math.min(smallestPrime, num);
				largestPrime = Math.max(largestPrime, num);
			}
			return;
		}

		for (let i = 0; i < arr.length; i++) {
			const nextNum = arr[i];
			const remainingNums = arr.slice(0, i).concat(arr.slice(i + 1));
			generatePermutations(
				remainingNums,
				currentPermutation.concat(nextNum)
			);
		}
	}

	generatePermutations(nums, []);

	if (smallestPrime === Infinity && largestPrime === -Infinity) {
		return [];
	} else {
		return smallestPrime === largestPrime
			? [smallestPrime]
			: [smallestPrime, largestPrime];
	}
}
