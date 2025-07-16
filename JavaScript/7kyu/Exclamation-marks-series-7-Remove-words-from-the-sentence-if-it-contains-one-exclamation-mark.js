// https://www.codewars.com/kata/57fafb6d2b5314c839000195/javascript

// Description:
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

function remove(string) {
	let arr = string.split(" ");
	string = arr;

	for (let i = 0; i < arr.length; i++) {
		if (
			arr[i].indexOf("!") === arr[i].lastIndexOf("!") &&
			arr[i].indexOf("!") !== -1
		) {
			string[i] = "kill";
		}
	}
	return string.filter((item) => item !== "kill").join(" ");
}