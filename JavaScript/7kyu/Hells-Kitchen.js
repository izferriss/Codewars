// https://www.codewars.com/kata/57d1f36705c186d018000813/javascript

// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function gordon(a) {
	let split = a.split(" ");
	for (let i = 0; i < split.length; i++) {
		split[i] = split[i].toUpperCase() + "!!!!";
		split[i] = split[i].replace(/A/g, "@");
		split[i] = split[i].replace(/[EIOU]/gi, "*");
	}
	return split.join(" ");
}
