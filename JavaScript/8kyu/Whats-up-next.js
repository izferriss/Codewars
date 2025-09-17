// https://www.codewars.com/kata/542ebbdb494db239f8000046/train/javascript

// Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

// When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

// nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
// nextItem("testing", "t") # "e"

function nextItem(sequence, item) {
	let found = false;

	if (Array.isArray(sequence) || typeof sequence === "string") {
		for (let i = 0; i < sequence.length; i++) {
			if (found) {
				return sequence[i];
			}
			if (sequence[i] === item) {
				found = true;
			}
		}
	} else if (typeof sequence[Symbol.iterator] === "function") {
		for (const element of sequence) {
			if (found) {
				return element;
			}
			if (element === item) {
				found = true;
			}
		}
	}

	return undefined;
}