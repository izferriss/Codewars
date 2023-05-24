// https://www.codewars.com/kata/585b1fafe08bae9988000314/train/java

// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :

// "12222666666999999999"

class Solution
{
    public static String explode(String digits)
    {
        String result = "";
      
        long num = Long.parseLong(digits);

        while(num > 0)
        {
            long remainder = num % 10;
            long temp = remainder;

            
            while(temp > 0)
            {
                result = Long.toString(remainder) + result;
                
                temp--;
            }
            num /= 10;
        }
        System.out.println(result);

        return result;
    }
}