// https://www.codewars.com/kata/621f89cc94d4e3001bb99ef4/

// Your mission, should you accept it, is to return the count of all integers in a given range which do not contain the digit 5 (in base 10 representation).
// You are given the start and the end of the integer range. The start and the end are both inclusive.

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> return 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> return 12
// The result may contain fives. ;-)
// The start will always be smaller than the end. Both numbers can be also negative.

// The regions can be very large and there will be a large number of test cases. So brute force solutions will certainly time out!

// Good luck, warrior!

function dontGiveMeFive(start, finish) {
  // Check if a number contains the digit 5
  function isValid(num) {
    return !num.toString().includes('5');
  }
  // Count how many integers between 0 and n (inclusive) don't contain 5
  function countValidUpTo(n) {
    if (n < 0) return 0; // handle negatives outside
    const digits = n.toString().split('').map(Number);
    const memo = new Map();
    function dp(pos, tight, leadingZero) {
      if (pos === digits.length) return leadingZero ? 0 : 1;
      const key = `${pos}-${tight}-${leadingZero}`;
      if (memo.has(key)) return memo.get(key);
      let total = 0;
      const limit = tight ? digits[pos] : 9;
      for (let d = 0; d <= limit; d++) {
        if (d === 5) continue; // Skip if the digit is 5
        const newTight = tight && d === limit;
        const newLeadingZero = leadingZero && d === 0;
        total += dp(pos + 1, newTight, newLeadingZero);
      }
      memo.set(key, total);
      return total;
    }
    return dp(0, true, true);
  }
  // General range count, regardless of sign
  function countInRange(a, b) {
    if (a > b) return 0;
    return countValidUpTo(b) - countValidUpTo(a - 1);
  }
  if (start >= 0) {
    // Include the finish boundary, and also check if the finish is valid
    return countInRange(start, finish) + (isValid(finish) ? 1 : 0);
  } else if (finish < 0) {
    // Handle the range where both numbers are negative
    return countInRange(-finish, -start) + (isValid(start) ? 1 : 0);
  } else {
    // Crosses zero
    const negatives = countInRange(1, -start);   // -start to -1
    const positives = countInRange(0, finish);   // 0 to finish
    return negatives + positives + (isValid(0) ? 1 : 0);
  }
 }