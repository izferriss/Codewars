// https://www.codewars.com/kata/513e08acc600c94f01000001

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) # returns FFFFFF
// rgb(255, 255, 300) # returns FFFFFF
// rgb(0,0,0) # returns 000000
// rgb(148, 0, 211) # returns 9400D3

#include<string>
#include<sstream>
#include<iomanip>

class RGBToHex
{
    public:
        static std::string rgb(int r, int g, int b)
        {
            std::stringstream s;
            std::string r_hex= "";
            std::string g_hex= "";
            std::string b_hex= "";

            if(r < 0)
            {
                r_hex = "00";
            }
            else if(r > 255)
            {
                r_hex = "FF";
            }
            else
            {
                s << std::setbase(16) << std::setw(2) << std::setfill('0')  << std::uppercase  << r;
                r_hex = s.str();
                s.clear();
                s.str("");
            }

            if(g < 0)
            {
                g_hex = "00";
            }
            else if(g > 255)
            {
                g_hex = "FF";
            }
            else
            {
                s << std::setbase(16) << std::setw(2) << std::setfill('0')  << std::uppercase  << g;
                g_hex = s.str();
                s.clear();
                s.str("");
            }

            if(b < 0)
            {
                b_hex = "00";
            }
            else if(b > 255)
            {
                b_hex = "FF";
            }
            else
            {
                s << std::setbase(16) << std::setw(2) << std::setfill('0')  << std::uppercase  << b;
                b_hex = s.str();
                s.clear();
                s.str("");
            }
            
            return (r_hex + g_hex + b_hex);    
        }
};