// https://www.codewars.com/kata/5809b62808ad92e31b000031/javascript

// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

function calculate(str) {
  str = str.match(/(\d+|[^\d]+)/g);
  let res = +str[0];
  for (let i = 1; i < str.length; i += 2) {
    str[i] === "plus" ? (res += +str[i + 1]) : (res -= +str[i + 1]);
  }

  return res.toString();
}