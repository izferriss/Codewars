// https://www.codewars.com/kata/5d49c93d089c6e000ff8428c/javascript

// Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

// Zero size files can always be saved even HD full.

// Input:
// Array of file sizes (0 <= s <= 100)
// Capacity of the HD (0 <= c <= 500)
// Output:
// Number of files that can be fully saved in the HD.
// Examples:
// save([4,4,4,3,3], 12) -> 3
// # 4+4+4 <= 12, but 4+4+4+3 > 12
// save([4,4,4,3,3], 11) -> 2
// # 4+4 <= 11, but 4+4+4 > 11
// save([12, 0, 0, 1], 12) -> 3
// # 12+0+0 <= 12, but 12+0+0+1 > 12
// Do not expect any negative or invalid inputs

function save(sizes, hd) {
	let i = 0;
	let vol = 0;
	while (vol < hd) {
		vol += sizes[i];
		i++;
	}
	if (vol > hd) {
		vol -= sizes[i - 1];
		i--;
	}
	if (i > sizes.length) {
		i--;
	}
	return i;
}
