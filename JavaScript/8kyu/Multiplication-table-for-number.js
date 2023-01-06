// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

function multiTable(number)
{
  return(
    "1 * " + number.toString() + " = " + (number * 1).toString() + "\n" +
    "2 * " + number.toString() + " = " + (number * 2).toString() + "\n" +
    "3 * " + number.toString() + " = " + (number * 3).toString() + "\n" +
    "4 * " + number.toString() + " = " + (number * 4).toString() + "\n" +
    "5 * " + number.toString() + " = " + (number * 5).toString() + "\n" +
    "6 * " + number.toString() + " = " + (number * 6).toString() + "\n" +
    "7 * " + number.toString() + " = " + (number * 7).toString() + "\n" +
    "8 * " + number.toString() + " = " + (number * 8).toString() + "\n" +
    "9 * " + number.toString() + " = " + (number * 9).toString() + "\n" +
    "10 * " + number.toString() + " = " + (number * 10).toString());
}