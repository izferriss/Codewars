// https://www.codewars.com/kata/56b7f2f3f18876033f000307

// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

// Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

// For example:

// isAscOrder(new int[]{1,2,4,7,19}) == true
// isAscOrder(new int[]{1,2,3,4,5}) == true
// isAscOrder(new int[]{1,6,10,18,2,4,20}) == false
// isAscOrder(new int[]{9,8,7,6,5,4,3,2,1}) == false // numbers are in DESCENDING order
// N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.

public class Are_the_numbers_in_order
{
    public static boolean isAscOrder(int[] arr) 
    {
        for(int i = 0; i < arr.length - 1; i++)
        {
            if(arr[i] > arr[i + 1])
            {
                return false;
            }
        }
        return true;
    }
}
  
