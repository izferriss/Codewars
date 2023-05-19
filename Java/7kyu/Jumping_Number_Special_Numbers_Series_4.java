// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/java

// Definition
// Jumping number is the number that All adjacent digits in it differ by 1.

// Task
// Given a number, Find if it is Jumping or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .

// Return the result as String .

// The difference between ‘9’ and ‘0’ is not considered as 1 .

// All single digit numbers are considered as Jumping numbers.

// Input >> Output Examples
// jumpingNumber(9) ==> return "Jumping!!"
// Explanation:
// It's single-digit number
// jumpingNumber(79) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(23) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1
// jumpingNumber(556847) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(4343456) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1
// jumpingNumber(89098) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(32) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1

class Solution
{
    public static String jumpingNumber(int number)
    {
        int num = number % 10;

        while (number > 0)
        {
            if(number < 10)
            {
                return "Jumping!!";
            }

            int test = (number / 10) % 10;
          
            if(Math.abs(num - test) != 1)
            {
                return "Not!!";
            }
          
            number /= 10;
            num = number % 10;
        }

        return "Jumping!!";
    }
}