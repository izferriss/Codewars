// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334

// Complete the function which converts a binary number (given as a string) to a decimal number.

int binToDec(bin)
{
    return int.parse(bin, radix: 2);
}