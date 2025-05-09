// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145/javascript

// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

function bingo(a) {
	return a.includes(2) &&
		a.includes(9) &&
		a.includes(14) &&
		a.includes(7) &&
		a.includes(15)
		? "WIN"
		: "LOSE";
}
