// https://www.codewars.com/kata/57c6c2e1f8392d982a0000f2

// Kata in this series

// Histogram - H1
// Histogram - H2
// Histogram - V1
// Histogram - V2
// Background
// A 6-sided die is rolled a number of times and the results are plotted as a character-based histogram.

// Example:

//     10
//     #
//     #
// 7   #
// #   #
// #   #     5
// #   #     #
// # 3 #     #
// # # #     #
// # # # 1   #
// # # # #   #
// -----------
// 1 2 3 4 5 6
// Task
// You will be passed all the dice roll results, and your task is to write the code to return a string representing a histogram, so that when it is printed it has the same format as the example.

// Notes
// There are no trailing spaces on the lines
// All lines (including the last) end with a newline \n
// A count is displayed above each bar (unless the count is 0)
// The number of rolls may vary but is always less than 100

#include <string>
#include <vector>

std::string trimTail(const std::string &s)
{
    int end = (int)s.find_last_not_of(" ");
    return (end == std::string::npos) ? "" : s.substr(0, end + 1);
}

std::string histogram(std::vector<int> results)
{
    int largest = -1;
    for(int i = 0; i < (int)results.size(); i++)
    {
        if(results[i] > largest)
        {
            largest = results[i];
        }
    }
  
    int height = largest + 3;
    int pos = 0;

    std::string temp = "";
    std::string out = "";

    if(largest == 0)
    {
        return "-----------\n1 2 3 4 5 6\n";
    }
    else
    {
        while(pos < height)
        {
            if(pos == 0)
            {
                temp += "-----------\n1 2 3 4 5 6\n";
                out.insert(0, temp);
                temp = "";
                pos++;
            }
            if(pos > 1)
            {
                for(int i = 0; i < (int)results.size(); i++)
                {
                    if(results[i] > 0 && results[i] + 2 > pos)
                    {
                        temp+= "# ";
                    }
                    else if(results[i] > 0 && results[i] + 2 == pos)
                    {
                        temp += std::to_string(results[i]);
                        if(results[i] < 10)
                        {
                            temp += " ";
                        }
                    }
                    else
                    {
                        temp+= "  ";
                    }
                }
                temp = trimTail(temp);
                temp +="\n";
                out.insert(0, temp);
                temp = "";
            }
        pos++;
        }
    }
        
    return out;
}