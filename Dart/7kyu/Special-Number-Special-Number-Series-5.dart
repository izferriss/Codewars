// https://www.codewars.com/kata/5a55f04be6be383a50000187

// Definition
// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

// Given a number determine if it special number or not .

// Notes
// The number passed will be positive (N > 0) .

// All single-digit numbers within the interval [1:5] are considered as special number.

// Input >> Output Examples
// specialNumber(2) ==> return "Special!!"
// Explanation:
// It's a single-digit number within the interval [1:5] .

String specialNumber(n)
{
    return (!n.toString().contains('6') && !n.toString().contains('7') && !n.toString().contains('8') && !n.toString().contains('9')) ? "Special!!" : "NOT!!";
}