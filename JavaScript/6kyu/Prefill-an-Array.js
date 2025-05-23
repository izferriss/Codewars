// https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript

// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

// Code Examples

//     prefill(3,1) --> [1,1,1]
    
//     prefill(2,"abc") --> ['abc','abc']
    
//     prefill("1", 1) --> [1]
    
//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]
      
//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"

function prefill(n, v) {
	let res = [];
	console.log(n);

	// n is a float
	if (isFloat(n)) {
		throw new TypeError(n + " is invalid");
	}

	//n is not an int but it is as a string
	if (!Number.isInteger(n) && Number.isInteger(parseInt(n, 10))) {
		n = parseInt(n, 10);
	}

	//n is not an int
	if (!Number.isInteger(n) || n < 0) {
		throw new TypeError(n + " is invalid");
	}

	console.log(n);
	if (n === 0) {
		return res;
	}
	for (let i = 0; i < n; i++) {
		res.push(v);
	}

	return res;
}

function isFloat(n) {
	return Number(n) === n && n % 1 !== 0;
}