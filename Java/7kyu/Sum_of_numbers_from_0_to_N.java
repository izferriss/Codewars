// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/java

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0

class SequenceSum
{
    public static String showSequence(int value)
    {
        if(value == 0)
        {
            return "0=0";
        }
        if(value < 0)
        {
            return Integer.toString(value) + "<0";
        }

        int pos = 0;
        int sum = 0;
        String result = "";

        while(pos < value)
        {
            result += Integer.toString(pos) + "+";
            sum += pos;
            pos++;
        }

        sum += value;
        result += Integer.toString(value) + " = " + Integer.toString(sum);

        return result;
    }
}