// https://www.codewars.com/kata/57cc79ec484cf991c900018d/javascript

// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.

function dbSort(a) {
	return a
		.filter((element) => typeof element === "number")
		.sort((b, c) => b - c)
		.concat(a.filter((element) => typeof element === "string").sort());
}