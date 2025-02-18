// https://www.codewars.com/kata/55911ef14065454c75000062

// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

#include <iostream>
#include <string>
#include <vector>

using namespace std;

string addition(string a, string b);
bool consistsOfOnlyZeros(string input);

string multiply(string a, string b)
{
    vector<string> sum;

    int blen = b.size() - 1;
    int last = 0;
    while (blen >= 0)
    {
        string s;
        int carry = 0;
        int aval;
        int bval;
        int currres;
        int alen = a.size() - 1;
        while (alen >= 0)
        {
            aval = a[alen]-'0';
            bval = b[blen]-'0';

            currres = (aval * bval + carry) % 10;
            carry = (aval * bval + carry) / 10;
            s.push_back(currres + '0');
            alen--;
        }
        if (carry != 0)
        {
            s.push_back(carry + '0');
        }
        reverse(s.begin(), s.end());

        int temp = last;
        
        while (temp--)
        {
            s.push_back('0');
        }

        last++;
        sum.push_back(s);
        blen--;
    }
    string ans = "0";
    for (auto str : sum)
    {
        ans = addition(ans, str);
    }

    if (ans[0] == '0')
    {
        int i = 1;
        while (i < ans.size() && ans[i] == '0')
        {
            ans.erase(ans.begin() + i);
            // i++;
        }
    }
    if(consistsOfOnlyZeros(ans))
    {
        return "0";
    }
    else
    {
        ans.erase(0, ans.find_first_not_of('0'));
        return ans;
    }
}

string addition(string a, string b)
{
    int alen = a.size() - 1;
    int blen = b.size() - 1;
    string sum;
    int carry = 0;
    int aval;
    int bval;
    int currres;
    while (alen >= 0 || blen >= 0)
    {
        if (alen >= 0)
        {
            aval = a[alen] - '0';
        }
        else
        {
            aval = 0;
        }
        if (blen >= 0)
        {
            bval = b[blen] - '0';
        }
        else
        {
            bval = 0;
        }
        currres = (aval + bval + carry) % 10;
        carry = (aval + bval + carry) / 10;
        sum.push_back(currres + '0');
        alen--;
        blen--;
    }

    if (carry != 0)
    {
        sum.push_back(carry + '0');
    }

    reverse(sum.begin(), sum.end());
    return sum;
}

bool consistsOfOnlyZeros(string input)
{
	for (int i = 0; i < input.length(); i++)
	{
		if (input[i] - '0' != 0)
		{
			return false;
		}
	}

	return true;
}