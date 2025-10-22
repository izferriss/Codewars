// https://www.codewars.com/kata/5784c89be5553370e000061b/csharp

// Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
// All inputs will be valid.
// Passing [2, 6, 3] should return 18, the product of [6, 3].

// Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

// Kata.MaxProduct(new int[] { 2, 1, 5, 0, 4, 3 });              // 20
// Kata.MaxProduct(new int[] { 7, 8, 9 })     ;                  // 72
// Kata.MaxProduct(new int[] { 33, 231, 454, 11, 9, 99, 57 });   // 104874

using System;
using System.Linq;

public class Kata
{
  public static int MaxProduct(int[] array)
  {
     Array.Sort(array);

        
        int largest1 = array[array.Length - 1];
        int largest2 = array[array.Length - 2];

        return largest1 * largest2;
  }
}