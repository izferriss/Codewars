// https://www.codewars.com/kata/582c81d982a0a65424000201/javascript

// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false

function arrCheck(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (!Array.isArray(arr[i])) {
			return false;
		}
	}

	return true;
}