// https://www.codewars.com/kata/53d32bea2f2a21f666000256/java

// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, new int[]{7, 6, 5, 4, 3, 2, 1})
// // => new int[]{6, 7}

class Solution
{
  
    public static int[] largest(int n, int[] arr)
    {
        int result[] = new int[n];
        java.util.Arrays.sort(arr);

        int j = 0;
        
        for(int i = arr.length - n; i < arr.length; i++)
        {
            result[j] = arr[i];
            j++;
        }

        return result;
    }
}