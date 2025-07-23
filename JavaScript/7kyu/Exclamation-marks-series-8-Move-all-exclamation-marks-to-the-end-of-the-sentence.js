// https://www.codewars.com/kata/57fafd0ed80daac48800019f/train/javascript

// Description:
// Move all exclamation marks to the end of the sentence

// Examples
// "Hi!"          ---> "Hi!"
// "Hi! Hi!"      ---> "Hi Hi!!"
// "Hi! Hi! Hi!"  ---> "Hi Hi Hi!!!"
// "Hi! !Hi Hi!"  ---> "Hi Hi Hi!!!"
// "Hi! Hi!! Hi!" ---> "Hi Hi Hi!!!!"

function remove(string) {
	return (
		string.replaceAll("!", "") +
		"!".repeat((string.match(/!/g) || []).length)
	);
}
