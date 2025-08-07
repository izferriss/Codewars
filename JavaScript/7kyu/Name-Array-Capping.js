// https://www.codewars.com/kata/5356ad2cbb858025d800111d/train/javascript

// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

// Examples
// ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
// ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]

function capMe(names) {
	return names.map((e) => {
		const l = e.toLowerCase();
		return l.charAt(0).toUpperCase() + l.slice(1);
	});
}