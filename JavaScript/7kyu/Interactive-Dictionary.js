// https://www.codewars.com/kata/57a93f93bb9944516d0000c1/javascript

// In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

// >>> let d = new Dictionary();

// >>> d.newEntry("Apple", "A fruit that grows on trees");

// >>> console.log(d.look("Apple"));
// A fruit that grows on trees

// >>> console.log(d.look("Banana"));
// Can't find entry for Banana
// Good luck and happy coding!

class Dictionary {
	constructor() {
		this.entry = {};
	}

	newEntry(key, value) {
		this.entry[key] = value;
	}

	look(key) {
		return this.entry[key] || `Can\'t find entry for ${key}`;
	}
}