// https://www.codewars.com/kata/5768a693a3205e1cc100071f/javascript

// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

function initializeNames(name) {
	let res = name.split(" ");
	if (res.length === 1 || res.length === 2) {
		return name;
	}
	for (let i = 1; i < res.length - 1; i++) {
		res[i] = res[i].substring(0, 1) + ".";
	}
	return res.join(" ");
}
