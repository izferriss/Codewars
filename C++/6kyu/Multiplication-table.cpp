// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

#include <vector>

using namespace std;
vector<vector<int>> multiplication_table(int n)
{
    vector<vector<int>> vect;
    int size = n + 1;
    for(int i = 1; i < size; i++)
    {
        vector<int> temp_vect;
        for(int j = 1; j < size; j++)
        {
            temp_vect.push_back(i * j);
        }
        vect.push_back(temp_vect);
    }

    return vect;
}