// https://www.codewars.com/kata/5732d3c9791aafb0e4001236/javascript

// Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

// If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.

// roundIt(3.45) should return 4
// If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.

// roundIt(34.5) should return 34
// If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.

// roundIt(34.56) should return 35

function roundIt(n) {
  let l = n.toString().substring(0, n.toString().indexOf(".")).length;
  let r = n.toString().substring(n.toString().indexOf(".")).length - 1;

  if (l < r) {
    return Math.ceil(n);
  } else if (r < l) {
    return Math.floor(n);
  } else {
    return Math.round(n);
  }
}
