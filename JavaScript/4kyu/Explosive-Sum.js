// https://www.codewars.com/kata/52ec24228a515e620b0005ef/train/javascript

// Examples
// Basic
// sum(1) // 1
// sum(2) // 2  -> 1+1 , 2
// sum(3) // 3 -> 1+1+1, 1+2, 3
// sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
// sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

// sum(10) // 42
// Explosive
// sum(50) // 204226
// sum(80) // 15796476
// sum(100) // 190569292

function sum(num) {
	if (num < 0) {
		return 0;
	}
	if (num === 0) {
		return 1;
	}

	const arr = Array(num + 1).fill(0);

	arr[0] = 1;

	for (let i = 1; i <= num; i++) {
		for (let j = i; j <= num; j++) {
			arr[j] += arr[j - i];
		}
	}

	return arr[num];
}
