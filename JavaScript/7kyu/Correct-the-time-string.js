// https://www.codewars.com/kata/57873ab5e55533a2890000c7/train/javascript

// A new task for you!

// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
// Examples
// "09:10:01" -> "09:10:01"  
// "11:70:10" -> "12:10:10"  
// "19:99:99" -> "20:40:39"  
// "24:01:01" -> "00:01:01"  
// If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function timeCorrect(timeString) {
	if (timeString === null || timeString === "") {
		return timeString;
	}

	if (!isValidTimeFormat(timeString)) {
		return null;
	}

	const parts = timeString.split(":");
	let hours = parseInt(parts[0], 10) || 0;
	let minutes = parseInt(parts[1], 10) || 0;
	let seconds = parseInt(parts[2], 10) || 0;

	const sign = hours < 0 || minutes < 0 || seconds < 0 ? -1 : 1;

	let totalSeconds =
		Math.abs(seconds) + Math.abs(minutes) * 60 + Math.abs(hours) * 3600;

	seconds = totalSeconds % 60;
	totalSeconds = Math.floor(totalSeconds / 60);
	minutes = totalSeconds % 60;
	hours = Math.floor(totalSeconds / 60) % 24;

	if (sign === -1) {
		hours = -hours;
	}

	const formattedHours = String(hours).padStart(2, "0");
	const formattedMinutes = String(minutes).padStart(2, "0");
	const formattedSeconds = String(seconds).padStart(2, "0");

	return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function isValidTimeFormat(timeString) {
	const timeRegex = /^\d{2}:\d{2}:\d{2}$/;
	return timeRegex.test(timeString);
}