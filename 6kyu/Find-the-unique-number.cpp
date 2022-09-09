// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// find_uniq(std::vector<float>{1, 1, 1, 2, 1, 1});  // --> 2
// find_uniq(std::vector<float>{0, 0, 0.55, 0, 0});  // --> 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

#include <vector>
#include <map>

float find_uniq(const std::vector<float> &v)
{
    std::map<float, int> freq;

    for(int i = 0; i < (int)v.size(); i++)
    {
        freq[v[i]]++;
    }

    std::map<float, int>::iterator it = freq.begin();

    if(it-> second == 1)
    {
        return it->first;
    }
    else
    {
        ++it;
        return it->first;
    }
}