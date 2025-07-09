// https://www.codewars.com/kata/55beec7dd347078289000021/train/javascript

// Linked Lists - Length & Count

// Implement length to count the number of nodes in a linked list.

// length(null) => 0
// length(1 -> 2 -> 3 -> null) => 3
// Implement Count() to count the occurrences of an integer in a linked list.

// count(null, 1) => 0
// count(1 -> 2 -> 3 -> null, 1) => 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
// I've decided to bundle these two functions within the same Kata since they are both very similar.

// The push()/Push() and buildOneTwoThree()/BuildOneTwoThree() functions do not need to be redefined.

function Node(data) {
	this.data = data;
	this.next = null;
}

function length(head) {
	let length = 0;
	if (head === null) {
		return length;
	}
	while (head !== null) {
		length++;
		head = head.next;
	}
	return length;
}

function count(head, data) {
	let count = 0;
	if (head === null) {
		return count;
	}
	while (head !== null) {
		if (head.data === data) {
			count++;
		}
		head = head.next;
	}
	return count;
}