// https://www.codewars.com/kata/555eded1ad94b00403000071

// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
#include <string>
#include <sstream>

std::string seriesSum(int n)
{
    float numer = 1;
    float denom = 1;
    float sum = 0.00f;
    for(int i = 0; i < n; i++)
    {
        sum += numer / denom;
        denom+=3;
    }
    std::stringstream result;
    result << std::fixed;
    result.precision(2);
    result << sum;
    return result.str();    
}