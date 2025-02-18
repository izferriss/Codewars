// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year)
{
    return year < 101 ? 1 : year % 100 != 0 ? parseInt(year.toString().substring(0, year.toString().length - 2)) + 1 : parseInt(year.toString().substring(0, year.toString().length - 2));
}