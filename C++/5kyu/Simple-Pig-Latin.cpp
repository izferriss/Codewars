// https://www.codewars.com/kata/520b9d2ad5c005041100000

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

#include <string>

std::string pig_it(std::string str)
{
    int pos = 0;
    std::string ay = "ay";
    std::string out = "";

    while(pos > -1)
    {
        std::string temp = str.substr(0 , 1);
        if(str == "?" || str == "!"  || str == "," || str == ".")
        {
            break;
        }
        if(temp == "?" || temp == "!"  || temp == "," || temp == ".")
        {
            out += temp + " ";
            str = str.substr(2, str.length() - 1);  
        }
        else
        {
            pos = str.find(" ", 1);
            if(pos > -1)
            {
                out += str.substr(1, pos - 1) + temp + ay + " ";
                str = str.substr(pos + 1, str.length() -1);  
            }
            else
            {
                break;
            }
        }
    }
    if(str == "?" || str == "!" || str == "," || str == ".")
    {
        out += str;
    }
    else
    {
        out += str.substr(1, str.length()) + str.substr(0 , 1) + ay;
    }

    return out;
}