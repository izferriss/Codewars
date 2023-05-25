// https://www.codewars.com/kata/56582133c932d8239900002e/java

// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.

class Kata
{
    public static int mostFrequentItemCount(int[] collection)
    {
        if(collection.length == 0)
        {
            return 0;
        }
        int most = maxFreq(collection);
        int count = 0;
        for(int i = 0; i < collection.length; i++)
        {
            if(collection[i] == most)
            {
                count++;
            }
        }

        return count;
    }

    public static int maxFreq(int arr[])
    {
        java.util.Arrays.sort(arr);

        int max = 1;
        int result = arr[0];
        int curr = 1;
    
        for(int i = 1; i < arr.length; i++)
        {
            if(arr[i] == arr[i - 1])
            {
                curr++;
            }
            else
            {
                curr = 1;
            }
                
            if(curr > max)
            {
                max = curr;
                result = arr[i - 1];
            }
        }

        return result;
    }
}