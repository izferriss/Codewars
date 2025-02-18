// https://www.codewars.com/kata/59c5f4e9d751df43cf000035

// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

int solve(String s) 
{
    var count = 0;
    var temp = 0;
    for(var i = 0; i < s.length; i++)
    {
        if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u')
        {
            count++;
        }
        else
        {
            if(temp < count)
            {
                temp = count;
            }
            count = 0;
        }
    }
    return temp;
}