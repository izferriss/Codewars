// https://www.codewars.com/kata/57faf32df815ebd49e000117/javascript

// Task
// Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi Hi"
// remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"

function remove(string) {
	let split = string.split(" ");
	for (let i = 0; i < split.length; i++) {
		while (split[i].endsWith("!")) {
			split[i] = split[i].slice(0, -1);
		}
	}

	return split.join(" ");
}