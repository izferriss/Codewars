// https://www.codewars.com/kata/57fb44a12b53146fe1000136/train/javascript

// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

function balance(left, right) {
	let lBang = 0;
	let rBang = 0;
	let lHuh = 0;
	let rHuh = 0;
	for (let c in left) {
		left[c] == "!" ? (lBang += 2) : (lHuh += 3);
	}
	for (let c in right) {
		right[c] == "!" ? (rBang += 2) : (rHuh += 3);
	}

	return lBang + lHuh == rBang + rHuh
		? "Balance"
		: lBang + lHuh > rBang + rHuh
		? "Left"
		: "Right";
}
