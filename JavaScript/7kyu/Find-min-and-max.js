// https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130/javascript

// Implement a function that returns the minimal and the maximal value of a list (in this order).

function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
