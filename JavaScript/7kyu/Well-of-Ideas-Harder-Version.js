// https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/train/javascript

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// The sub arrays may not be the same length.

// The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.

function well(x) {
	let count = 0;
	x = x.flat(Infinity);
	console.log(x);
	x.forEach((i) => {
		if (typeof i === "string") {
			if (i.toLowerCase() === "good") {
				count++;
			}
		}
	});
	return count > 2 ? "I smell a series!" : count === 0 ? "Fail!" : "Publish!";
}