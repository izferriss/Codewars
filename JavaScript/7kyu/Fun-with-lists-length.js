// https://www.codewars.com/kata/581e476d5f59408553000a4b/train/javascript

// Implement the method length, which accepts a linked list (head), and returns the length of the list.

// For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null and can hold any type of value.

// Good luck!

// This kata is part of fun w

function length(head) {
	let count = 0;
	while (head !== null) {
		count++;
		head = head.next;
	}
	return count;
}
