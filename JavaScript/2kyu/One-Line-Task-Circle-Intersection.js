// https://www.codewars.com/kata/5908242330e4f567e90000a3

// Task
// Given two congruent circles a and b of radius r, return the area of their intersection rounded down to the nearest integer.

// Code Limit
// Javascript: Less than 94 characters.

// Python: Less than 128 characters.

// Example
// For c1 = [0, 0], c2 = [7, 0] and r = 5,

// the output should be 14.

with(Math)circleIntersection=([a,b],[c,d],r,x=2*acos(hypot(a-c,b-d)/r/2))=>~~(r*r*(x-sin(x)))