// https://www.codewars.com/kata/5a0b4dc2ffe75f72f70000ef/javascript

// Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day. Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.

// Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.

function findChildren(santasList, children) {
	const presentChildren = new Set();
	const santaSet = new Set(santasList);

	for (const child of children) {
		if (santaSet.has(child)) {
			presentChildren.add(child);
		}
	}

	const sortedPresentChildren = Array.from(presentChildren).sort();

	return sortedPresentChildren;
}