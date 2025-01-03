// https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/java

// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

class Kata
{
    static String alternateCase(final String string)
    {
        String result = "";
        for(int i = 0; i < string.length(); i++)
        {
            if(Character.isLowerCase(string.charAt(i)))
            {
                result += string.toUpperCase().charAt(i);
            }
            else
            {
                result += string.toLowerCase().charAt(i);
            }
        }

        return result;
    }
}