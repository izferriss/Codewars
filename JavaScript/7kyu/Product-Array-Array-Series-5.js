// https://www.codewars.com/kata/5a905c2157c562994900009d/train/javascript

// Task
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Notes
// Array/list size is at least 2 .

// Array/list's numbers Will be only Positives

// Repetition of numbers in the array/list could occur.

function productArray(numbers) {
	let res = [];
	let e = 0;
	while (res.length < numbers.length) {
		let prod = 1;
		for (let i = 0; i < numbers.length; i++) {
			if (i === e) {
				continue;
			}
			prod *= numbers[i];
		}
		res.push(prod);
		e++;
	}
	return res;
}