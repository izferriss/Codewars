// https://www.codewars.com/kata/56eb16655250549e4b0013f4/train/javascript

// What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

// You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

// Input: Year as an int.

// Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

// Preconditions:

// Week starts on Monday.
// Year is between 1583 and 4000.
// Calendar is Gregorian.
// Examples (input -> output):
// * 2427 -> ['Friday']
// * 2185 -> ['Saturday']
// * 2860 -> ['Thursday', 'Friday']

function mostFrequentDays(year) {
	const weekdays = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	const dayCounts = new Array(7).fill(0);

	for (let month = 0; month < 12; month++) {
		const daysInMonth = new Date(year, month + 1, 0).getDate();
		for (let day = 1; day <= daysInMonth; day++) {
			const date = new Date(year, month, day);
			let dayOfWeek = date.getDay();

			if (dayOfWeek === 0) {
				dayOfWeek = 6;
			} else {
				dayOfWeek--;
			}
			dayCounts[dayOfWeek]++;
		}
	}

	const maxFrequency = Math.max(...dayCounts);

	const frequentDays = [];
	for (let i = 0; i < 7; i++) {
		if (dayCounts[i] === maxFrequency) {
			frequentDays.push(weekdays[i]);
		}
	}

	return frequentDays;
}