// https://www.codewars.com/kata/57fb142297e0860073000064/javascript

// Description:
// Count the number of exclamation marks and question marks, return the product.

// Examples
// ""          --->   0
// "!"         --->   0
// "!ab? ?"    --->   2
// "!!"        --->   0
// "!??"       --->   2
// "!???"      --->   3
// "!!!??"     --->   6
// "!!!???"    --->   9
// "!???!!"    --->   9
// "!????!!!?" --->  20
// Fundamentals

function product(string) {
  let arr = string.split("");
  let countBang = 0;
  let countHuh = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "!") {
      countBang++;
    }
    if (arr[i] == "?") {
      countHuh++;
    }
  }

  return countBang * countHuh;
}