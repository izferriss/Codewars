/* THIS IS CURRENTLY NOT SUBMITTED ON CODEWARS AS A VALID SOLUTION */
/* 9 too many characters -____- */

// https://www.codewars.com/kata/5908242330e4f567e90000a3

// Task
// Given two congruent circles a and b of radius r, return the area of their intersection rounded down to the nearest integer.

// Code Limit
// Javascript: Less than 94 characters.

// Python: Less than 128 characters.

// Example
// For c1 = [0, 0], c2 = [7, 0] and r = 5,

// the output should be 14.

with(Math)circleIntersection=([a,b],[c,d],r,e=hypot(a-c,b-d),x=acos(e/(2*r)))=>~~(r**2*(2*x-sin(2*x)));