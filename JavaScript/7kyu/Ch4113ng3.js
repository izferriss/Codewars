// https://www.codewars.com/kata/59e9f404fc3c49ab24000112/train/javascript

// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

function nerdify(txt) {
	return txt
		.replaceAll("A", "4")
		.replaceAll("a", "4")
		.replaceAll("E", "3")
		.replaceAll("e", "3")
		.replaceAll("l", 1);
}
