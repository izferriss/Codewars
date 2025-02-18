// https://www.codewars.com/kata/517abf86da9663f1d2000003

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

#include <string>

std::string to_camel_case(std::string text)
{
    std::string ret = "";
    bool next_is_upper = false;
    for(int i = 0; i < text.length(); i++)
    {
        if(i == 0)
        {
            ret += text[i];
        }
        else
        {
            if((text[i] == '_' || text[i] == '-') && !next_is_upper)
            {
                next_is_upper = true;
            }
            else if(next_is_upper)
            {
                ret += toupper(text[i]);
                next_is_upper = false;
            }
            else
            {
                ret += text[i];
            }
        }
    }
    return ret;
}