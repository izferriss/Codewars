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
  function countInRange(n) {
    const absN = Math.abs(n);
    const s = String(absN);
    const len = s.length;
    let ans = 0;

    for (let i = 1; i < len; i++) {
        ans += 9 ** (i - 1) * 8;
    }

    for (let i = 0; i < len; i++) {
        const digit = parseInt(s[i]);
        for (let j = (i === 0 ? 1 : 0); j < digit; j++) { // Correct start of inner loop
            if (j !== 5) {
                ans += 9 ** (len - i - 1);
            }
        }
        if (digit === 5) {
            break;
        }
        if (i === len - 1 && digit !== 5) {
            ans++;
        }
    }

    return n >= 0 ? ans : (9 ** len - ans - 1); 
}

if (start > finish) return 0;

let result = 0;
if (start <= 0 && finish >= 0) {
    result = countInRange(finish) + countInRange(-start) + 1;  // Add 1 for zero
} else if (start >= 0) {
    result = countInRange(finish) - countInRange(start - 1);
} else {
    result = countInRange(-start) - countInRange(-finish - 1);
}

return result;
}