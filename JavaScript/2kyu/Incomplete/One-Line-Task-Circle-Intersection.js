/* THIS IS CURRENTLY NOT SUBMITTED ON CODEWARS AS A VALID SOLUTION */
/* 40 too many characters */

// https://www.codewars.com/kata/5908242330e4f567e90000a3

// Task
// Given two congruent circles a and b of radius r, return the area of their intersection rounded down to the nearest integer.

// Code Limit
// Javascript: Less than 94 characters.

// Python: Less than 128 characters.

// Example
// For c1 = [0, 0], c2 = [7, 0] and r = 5,

// the output should be 14.

circleIntersection=(a,b,r,d=Math.hypot(a[0]-b[0],a[1]-b[1]),x=Math.acos(d/(2*r)))=>(d==0)?~~(3.14*r**2):~~(r**2*(2*x-Math.sin(2*x)));