// https://www.codewars.com/kata/5a8059b1fd577709860000f6/train/javascript

// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

// Examples (input -> output)
// "kata" -> false ('a' comes after 'k')
// "ant" -> true (all characters are in alphabetical order)
// Good luck :)

function alphabetic(s) {
	if (s.length === 1) {
		return true;
	}
	s = s.toLowerCase();
	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] > s[i + 1]) {
			return false;
		}
	}

	return true;
}