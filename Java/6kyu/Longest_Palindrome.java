// https://www.codewars.com/kata/54bb6f887e5a80180900046b/java

// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

class Palindromes
{
    public static int longestPalindrome(final String s)
    {
        int max = 0;

        for(int i = 0; i < s.length(); i++)
        {
            for(int j = i; j < s.length(); j++)
            {
                boolean flag = true;
                for(int k = 0; k < (j - i + 1) / 2; k++)
                {
                    if(s.charAt(i + k) != s.charAt(j - k))
                    {
                        flag = false;
                    }
                }

                if(flag && (j - i + 1) > max)
                {
                    max = j - i + 1;
                }
            }
        }

        return max;
    }
}