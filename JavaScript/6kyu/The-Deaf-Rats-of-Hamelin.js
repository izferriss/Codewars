// https://www.codewars.com/kata/598106cb34e205e074000031/train/javascript

// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

var countDeafRats = function (town) {
  town = town.replaceAll(" ", "");
  let count = 0;
  if (town.indexOf("P") === 0) {
    town = town.split("P");
    let right = splitStringByTwoChars(town[1]);
    for (rat in right) {
      if (right[rat] === "~O") {
        count++;
      }
    }
    return count;
  } else if (town.indexOf("P") === town.length - 1) {
    town = town.split("P");
    let left = splitStringByTwoChars(town[0]);
    for (rat in left) {
      if (left[rat] === "O~") {
        count++;
      }
    }
    return count;
  } else {
    console.log("check left and right");
    town = town.split("P");
    console.log(town);
    let left = splitStringByTwoChars(town[0]);
    let right = splitStringByTwoChars(town[1]);
    for (rat in right) {
      if (right[rat] === "~O") {
        count++;
      }
    }
    for (rat in left) {
      if (left[rat] === "O~") {
        count++;
      }
    }
    return count;
  }
};
function splitStringByTwoChars(str) {
  const result = [];
  for (let i = 0; i < str.length; i += 2) {
    result.push(str.substring(i, i + 2));
  }
  return result;
}