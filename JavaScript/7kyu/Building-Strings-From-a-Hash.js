// https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2/javascript

// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

function solution(pairs) {
  const keyVal = Object.entries(pairs);
  let res = "";
  for (let i = 0; i < keyVal.length; i++) {
    res +=
      keyVal[i][0] + " = " + keyVal[i][1] + (i == keyVal.length - 1 ? "" : ",");
  }
  return res;
}
