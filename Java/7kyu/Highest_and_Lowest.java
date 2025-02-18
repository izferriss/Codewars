// https://www.codewars.com/kata/554b4ac871d6813a03000035

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5")  // return "5 1"
// highAndLow("1 2 -3 4 5") // return "5 -3"
// highAndLow("1 9 3 4 -5") // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

public class Highest_and_Lowest
{
    public static String highAndLow(String numbers)
    {
        String[] splitArray = numbers.split(" ");
        int[] nums = new int[splitArray.length];
        for (int i = 0; i < splitArray.length; i++)
        {
            nums[i] = Integer.parseInt(splitArray[i]);
        }
        int min = nums[0];
        int max = nums[0];
        for(int i = 1; i < nums.length; i++)
        {
            if(nums[i] < min)
            {
                min = nums[i];
            }
            if(nums[i] > max)
            {
                max = nums[i];
            }
        }

        return max + " " + min;
    }
}