// https://www.codewars.com/kata/55960bbb182094bc4800007b/javascript

// Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.

// Examples
// 454793 ---> "4547-9-3"
//      0 ---> "0"
//      1 ---> "1"
// 13579  ---> "1-3-5-7-9"
//  86420 ---> "86420"

function insertDash(num) {
	let numStr = num.toString();
	let res = "";
	for (let i = 0; i < numStr.length; i++) {
		if (
			parseInt(numStr[i]) % 2 !== 0 &&
			parseInt(numStr[i + 1]) % 2 !== 0 &&
			i != numStr.length - 1
		) {
			res += numStr[i] + "-";
		} else {
			res += numStr[i];
		}
	}
	return res;
} 