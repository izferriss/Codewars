// https://www.codewars.com/kata/5857e8bb9948644aa1000246/train/javascript

// Can Santa save Christmas?
// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

// But he has only 24 hours left. Can he do it?

// Your Task:
// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .

function determineTime(durations) {
	let tot = 0;
	for (let i = 0; i < durations.length; i++) {
		let hr = durations[i].split(":")[0] * 3600;
		let min = durations[i].split(":")[1] * 60;
		let sec = durations[i].split(":")[2];

		tot += +hr + +min + +sec;

		if (tot > 3600 * 24) {
			return false;
		}
	}

	return true;
}