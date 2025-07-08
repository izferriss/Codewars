// https://www.codewars.com/kata/59fc72fe235f93838b002235/javascript

// Your task is to implement a function that takes two inputs, x and y, and returns the value of x raised to the power of y.

// Simple, right? But you are NOT allowed to use Math.pow();

// Both x and y will be natural numbers (non-negative integers) in range 0 <= x,y <= 13.

// Special Case: For this challenge, 0^0 is defined to be 1.

function power(x, y) {
	return x ** y;
}