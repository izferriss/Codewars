// https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/javascript

// You are given a string of words and numbers. Extract the expression including:

// the operator: either addition ("gains") or subtraction ("loses")
// the two numbers that we are operating on
// Return the result of the calculation.

// Notes:

// "loses" and "gains" are the only two words describing operators
// No fruit debts nor bitten apples = The numbers are integers and no negatives
// Examples
// "Panda has 48 apples and loses 4"  -->  44
// "Jerry has 34 apples and gains 6"  -->  40
// Should be a nice little kata for you :)

function calculate(str) {
	const numbers = str.match(/\d+/g).map(Number);

	if (str.includes("gains")) {
		return numbers[0] + numbers[1];
	} else if (str.includes("loses")) {
		return numbers[0] - numbers[1];
	}

	return null; // Return null or handle other cases as needed
}