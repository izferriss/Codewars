// https://www.codewars.com/kata/557dd2a061f099504a000088/train/javascript

// Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.

// Here's an example of a list:

// {value: 1, next: {value: 2, next: {value: 3, next: null}}}
// Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

// [1, 2, 3]
// Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.

function listToArray(list) {
	let res = [];
	while (list.next !== null) {
		res.push(list.value);
		list = list.next;
	}
	res.push(list.value);
	return res;
}