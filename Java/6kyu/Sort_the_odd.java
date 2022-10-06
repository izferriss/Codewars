// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

import java.util.Arrays;

public class Sort_the_odd 
{
    public static int[] sortArray(int[] array) 
    {
        int odds = 0;
        for(int i = 0; i < array.length; i++)
        {
            if(array[i] % 2 != 0)
            {
                odds++;
            }
        }

        int[] oddArr = new int[odds];
        int count = oddArr.length - 1;
        for(int i = 0; i < array.length; i++)
        {
            if(array[i] % 2 != 0)
            {
                oddArr[count] = array[i];
                count--;
            }
        }

        Arrays.sort(oddArr);
        count = 0;

        for(int i = 0; i < array.length; i++)
        {
            if(array[i] % 2 != 0)
            {
                array[i] = oddArr[count];
                count++;
            }
        }

        return array;
    }
}