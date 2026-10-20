// https://www.codewars.com/kata/55908aad6620c066bc00002a/typescript

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

export function xo(str: string): boolean {
    const lowerStr = str.toLowerCase();
    return lowerStr.split('x').length - 1 === lowerStr.split('o').length - 1;
}