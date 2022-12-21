// https://www.codewars.com/kata/52685f7382004e774f0001f7

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds)
{
    hr = Math.floor(seconds / 3600);
    seconds %= 3600;
    min = Math.floor(seconds / 60);
    sec = seconds % 60;
  
    return hr.toString().padStart(2, '0') + ":" + min.toString().padStart(2, '0') + ":" + sec.toString().padStart(2, '0');
}