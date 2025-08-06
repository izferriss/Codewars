// https://www.codewars.com/kata/599db0a227ca9f294b0000c8/javascript

// It's important day today: the class has just had a math test. You will be given a list of marks. Complete the function that will:

// Calculate the average mark of the whole class and round it to 3 decimal places.
// Make a dictionary/hash with keys "h", "a", "l" to make clear how many high, average and low marks they got. High marks are 9 & 10, average marks are 7 & 8, and low marks are 1 to 6.
// Return list [class_average, dictionary] if there are different type of marks, or [class_average, dictionary, "They did well"] if there are only high marks.
// Examples
// [10, 9, 9, 10, 9, 10, 9] ==> [9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']

// [5, 6, 4, 8, 9, 8, 9, 10, 10, 10] ==> [7.9, {'h': 5, 'a': 2, 'l': 3}]

function testResult(array) {
	const counts = {
		l: 0,
		a: 0,
		h: 0,
	};

	for (const num of array) {
		if (num >= 1 && num <= 6) {
			counts["l"]++;
		} else if (num === 7 || num === 8) {
			counts["a"]++;
		} else if (num === 9 || num === 10) {
			counts["h"]++;
		}
	}

	let res = [averageAndRound(array), counts];
	if (counts["a"] === 0 && counts["l"] === 0) {
		res.push("They did well");
	}

	return res;
}

function averageAndRound(arr) {
	if (arr.length === 0) {
		return 0; // Handle empty array case
	}

	const sum = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);
	const average = sum / arr.length;
	const roundedAverage = +average.toFixed(3); // Convert back to number

	return roundedAverage;
}
