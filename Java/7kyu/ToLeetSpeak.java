// https://www.codewars.com/kata/57c1ab3949324c321600013f/java

// Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

// More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

// For example:

// toLeetSpeak("LEET") returns "1337"
// In this kata we use a simple LeetSpeak dialect. Use this alphabet:

// {
//   A : '@',
//   B : '8',
//   C : '(',
//   D : 'D',
//   E : '3',
//   F : 'F',
//   G : '6',
//   H : '#',
//   I : '!',
//   J : 'J',
//   K : 'K',
//   L : '1',
//   M : 'M',
//   N : 'N',
//   O : '0',
//   P : 'P',
//   Q : 'Q',
//   R : 'R',
//   S : '$',
//   T : '7',
//   U : 'U',
//   V : 'V',
//   W : 'W',
//   X : 'X',
//   Y : 'Y',
//   Z : '2'
// }

class Kata
{
    static String toLeetSpeak(final String speak)
    {
        String leet = "@8(D3F6#!JK1MN0PQR$7UVWXY2";
        String alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String result = "";

        for(int i = 0; i < speak.length(); i++)
        {
            int idx = alph.indexOf(speak.charAt(i));
            if(idx == -1)
            {
                result += speak.charAt(i);
                continue;
            }

            result += leet.charAt(idx);
        }
        return result;
    }
}