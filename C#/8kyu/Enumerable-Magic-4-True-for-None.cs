// https://www.codewars.com/kata/545993ee52756d98ca0010e1/csharp

// Write a function that takes two arguments: an array and a callback function (in Ruby: a block).

// The function should return true if the callback / block returns false for all of the items in the array, or if the array is empty; otherwise return false.

using System;

public class Kata
{
  public static bool None(int[] arr, Func<int, bool> fun)
  {
    foreach(int v in arr)
      {
      if(fun(v))
        {
        return false;
      }
    }
    return true;
  }
}