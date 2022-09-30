// https://www.codewars.com/kata/5511b2f550906349a70004e1

// Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^ba 
// b
//  . Note that aaa and bbb may be very large!

// For example, the last decimal digit of 979^79 
// 7
//   is 999, since 97=47829699^7 = 47829699 
// 7
//  =4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2 
// 200
//  ) 
// 2 
// 300
 
//  , which has over 109210^{92}10 
// 92
//   decimal digits, is 666. Also, please take 000^00 
// 0
//   to be 111.

// You may assume that the input will always be valid.

// Examples
// last_digit("4", "1")            // returns 4
// last_digit("4", "2")            // returns 6
// last_digit("9", "7")            // returns 9    
// last_digit("10","10000000000")  // returns 0
// Remarks
// JavaScript, C++, R, PureScript, COBOL
// Since these languages don't have native arbitrarily large integers, your arguments are going to be strings representing non-negative integers instead.

#include<iostream>
#include<cmath>
#include<string>

int last_digit(const std::string &str1, const std::string &str2) 
{
    int str1LastDigit = (str1[str1.length() - 1] - '0');
    int str2LastDigit = (str2[str2.length() - 1] - '0');
    int oddth = str1LastDigit;
    int eventh = (int)pow(oddth, 2) % 10;
  
    std::cout << "str1: " << str1 << "\nstr2: " << str2 << std::endl;
    std::cout << "Oddth: " << oddth << "\nEventh: " << eventh << std::endl;
    if(str2 == "1")
    {
        return str1LastDigit;
    }
    else if(str2 == "0")
    {
        return 1;
    }
    else if((str1LastDigit == 0 || str1LastDigit == 1 || str1LastDigit == 4) ||
            (str1LastDigit == 5 || str1LastDigit == 6 || str1LastDigit == 9))  
    {
        if(str2LastDigit % 2 == 0)
        {
            std::cout << "returning " << eventh << "\n" << std::endl;
            return eventh;
        }
        else
        {
            std::cout << "returning " << oddth << "\n" << std::endl;
            return oddth;
        }
    }
    else
    {
        int exp = 0;
        int mod = 0;
        for (int i = 0; i < (int)str2.length(); i++)
        {
            mod = (mod * 10 + str2[i] - '0') % 4;
        }
          
        if(mod == 0)
        {
            exp = 4;
        }
        else
        {
            exp = mod;
        }

        std::cout << "exp = " << exp << "\n";
        return ((int)pow(str1LastDigit, exp) % 10);
    }
}