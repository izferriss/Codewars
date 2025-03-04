// https://www.codewars.com/kata/57b68bc7b69bfc8209000307/javascript

// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// The array will never be empty.

function average(scores) {
  return scores.length === 0
    ? 0
    : Math.round(scores.reduce((acc, val) => acc + val, 0) / scores.length);
}