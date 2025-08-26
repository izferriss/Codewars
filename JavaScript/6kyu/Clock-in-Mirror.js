//www.codewars.com/kata/56548dad6dae7b8756000037/train/javascript

// Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// He knows that the time is 11:38

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// in the same manner:

// 05:25 --> 06:35

// 01:50 --> 10:10

// 11:58 --> 12:02

// 12:01 --> 11:59

// Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

// Return the real time as a string.

// Consider hours to be between 1 <= hour < 13.

// So there is no 00:20, instead it is 12:20.

// There is no 13:20, instead it is 01:20.

function WhatIsTheTime(timeInMirror) {
	const [hoursStr, minutesStr] = timeInMirror.split(":");
	let hours = parseInt(hoursStr, 10);
	let minutes = parseInt(minutesStr, 10);

	if (hours === 0) {
		hours = 12;
	} else if (hours > 12) {
		hours -= 12;
	}

	let mirrorMinutes = (60 - minutes) % 60;
	let mirrorHours;

	if (minutes === 0) {
		mirrorHours = 12 - hours;
	} else {
		mirrorHours = 11 - hours;
	}

	if (mirrorHours === 0) {
		mirrorHours = 12;
	} else if (mirrorHours < 0) {
		mirrorHours += 12;
	}

	const formattedMirrorHours = String(mirrorHours);
	const formattedMirrorMinutes = String(mirrorMinutes).padStart(2, "0");

	return `${
		formattedMirrorHours.length === 1
			? "0" + formattedMirrorHours
			: formattedMirrorHours
	}:${formattedMirrorMinutes}`;
}