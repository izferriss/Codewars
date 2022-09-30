// https://www.codewars.com/kata/5c09ccc9b48e912946000157

// Kata Task
// A bird flying high above a mountain range is able to estimate the height of the highest peak.

// Can you?

// Example
// The birds-eye view
// ^^^^^^
//  ^^^^^^^^
//   ^^^^^^^
//   ^^^^^
//   ^^^^^^^^^^^
//   ^^^^^^
//   ^^^^
// The bird-brain calculations
// 111111
//  1^^^^111
//   1^^^^11
//   1^^^1
//   1^^^^111111
//   1^^^11
//   1111
// 111111
//  12222111
//   12^^211
//   12^21
//   12^^2111111
//   122211
//   1111
// 111111
//  12222111
//   1233211
//   12321
//   12332111111
//   122211
//   1111
// Height = 3

// Series
// Bird Mountain
// Bird Mountain - the river

#include <vector>
#include <string>

int peak_height(std::vector<std::string>& mountain) 
{
    int n = 1;
    bool foundCarrot = true;

    while(foundCarrot)
    {
        for(int i = 0; i < (int)mountain.size(); i++)
        {
            for(int j = 0; j < (int)mountain[i].size(); j++)
            {
                if(mountain[i][j] == '^')
                {
                    foundCarrot = true;
                    break;
                }
                else
                {
                    foundCarrot = false;
                }
            }
        
            if(foundCarrot)
            {
                break;
            }
        }

        if(foundCarrot)
        {   
            for(int i = 0; i < (int)mountain.size(); i++)
            {
                for(int j = 0; j < (int)mountain[i].size(); j++)
                {
                    if(i == 0 && mountain[i][j] == '^')
                    {
                        mountain[i][j] = static_cast<char>(n);
                    }
                    else if(i == (int)mountain.size() - 1 && mountain[i][j] == '^')
                    {
                        mountain[i][j] = static_cast<char>(n);
                    }
                    else if(j == 0 && mountain[i][j] == '^')
                    {
                        mountain[i][j] = static_cast<char>(n);
                    }
                    else if(j == (int)mountain[i].size() - 1 && mountain[i][j] == '^')
                    {
                        mountain[i][j] = static_cast<char>(n);
                        
                    }
                    else
                    {
                        if(mountain[i][j] == '^' && (mountain[i - 1][j] == ' ' || mountain[i + 1][j] == ' ' ||
                                                    mountain[i][j - 1] == ' ' || mountain[i][j + 1] == ' ' ||
                                                    (int)mountain[i - 1][j] == n - 1 || (int)mountain[i + 1][j] == n - 1 ||
                                                    (int)mountain[i][j - 1] == n - 1 || (int)mountain[i][j + 1] == n - 1))
                        {
                            mountain[i][j] = static_cast<char>(n);
                        }
                    }
                }
            }
            n++;
        }
    }
    return n - 1;
}