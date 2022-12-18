// https://www.codewars.com/kata/52685f7382004e774f0001f7

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds)
{
    let hrs = (seconds / 3600).toString().substring(0, (seconds / 3600).toString().indexOf("."));
    let min = seconds % 3600;
    let sec = (seconds / 3600) % 60;

    return hrs.padStart(2, '0')+":"+min.padStart(2, '0')+":"+sec.padStart(2, '0');
}