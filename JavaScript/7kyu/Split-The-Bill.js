// https://www.codewars.com/kata/5641275f07335295f10000d0/javascript

// You're in a restaurant with your friends and it's time to go, but there's still one big problem...the bill. Who will pay what? Lucky for you, you've got your computer handy! One simple function and the bill is paid——fairly, too!

// The function should take one parameter: an object/dict with two or more name-value pairs that represent the members of the group and the amount spent by each.

// Your function should return an object/dict with the same names, showing how much money the members should pay or receive.

// Further points:

// The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
// If value is a decimal, round to two decimal places.
// Translations and comments (and upvotes!) welcome.

// Example
// 3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

// var group = {
//     A: 20,
//     B: 15,
//     C: 10
// }

// splitTheBill(group) // returns {A: 5, B: 0, C: -5}
// Good Luck and Happy Eats!

function splitTheBill(x) {
	let average =
		Object.values(x).reduce((a, b) => a + b, 0) / Object.values(x).length;
	let arr = Object.keys(x);
	let arr2 = Object.values(x).map((a, b) => a - average);
	return Object.assign(
		...arr.map((n, i) => ({ [n]: parseFloat(arr2[i].toFixed(2)) }))
	);
}