// https://www.codewars.com/kata/51b66044bce5799a7f000003

// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Examples
// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000
// Help
// Symbol	Value
// I	1
// IV	4
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000

#include <string>
#include <cstring>
#include <iostream>

class RomanHelper
{
    public:
    //array position            0    1    2     3    4     5    6     7    8     9    10   11   12 
    std::string roman[13]  = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
    int base10[13]        = {1000, 900, 500,  400, 100,   90,  50,   40,  10,    9,    5,   4,   1};
    std::string to_roman(unsigned int n)
    {
        std::string results = "";
        int num = n;
        
        for(int i = 0; i < 13; i++)
        {
            while(num - base10[i] >= 0)
            {
                results += roman[i];
                num =  num - base10[i];
            }
        }
        return results;
    }
    int from_roman(std::string rn)
    {
        int output = 0;
        for(int i = 0; i < (int)rn.length(); i++)
        {
            //"C(n)"
            if(rn[i] == *roman[4].c_str())
                {
                    //"CM"
                    if(rn[i + 1] == *roman[0].c_str())
                    {
                        output += base10[1];
                        i++;
                    }
                    //"CD"
                    else if(rn[i + 1] == *roman[2].c_str())
                    {
                        output += base10[3];
                        i++;
                    }
                    //"C"
                    else
                    {
                        output += base10[4]; 
                    }
                }
            //"X(n)"
            else if(rn[i] == *roman[8].c_str())
                {
                    //"XC"
                    if(rn[i + 1] == *roman[4].c_str())
                    {
                        output += base10[5];
                        i++;
                    }
                    //"XL"
                    else if(rn[i + 1] == *roman[6].c_str())
                    {
                        output += base10[7];
                        i++;
                    }
                    //"X"
                    else
                    {
                        output += base10[8];
                    }
                }
                //"I(n)"
                else if(rn[i] == *roman[12].c_str())
                {
                //"IX"
                    if(rn[i + 1] == *roman[8].c_str())
                    {
                        output += base10[9];
                        i++;
                    }
                    //"IV"
                    else if(rn[i + 1] == *roman[10].c_str())
                    {
                        output += base10[11];
                        i++;
                    }
                    //"I"
                    else
                    {
                        output += base10[12];
                    }
                }
            //"M"
            else if(rn[i] == *roman[0].c_str())
            {
                output += base10[0];
            }
            //"D"
            else if(rn[i] == *roman[2].c_str())
            {
            output += base10[2];
            }
            //"V"
            else if(rn[i] == *roman[10].c_str())
            {
            output += base10[10];
            }
            //"L"
            else
            {
            output += base10[6];
            }
        }
    std::cout << output << std::endl;
    return output;
    }

}
RomanNumerals;