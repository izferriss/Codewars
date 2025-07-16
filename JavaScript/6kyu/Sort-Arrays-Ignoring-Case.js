// https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9/javascript

// Sort the given array of strings in alphabetical order, case insensitive. For example:

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

function sortme(names) {
	return names.sort(function (a, b) {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});
}