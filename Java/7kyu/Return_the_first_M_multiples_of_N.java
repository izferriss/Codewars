// https://www.codewars.com/kata/593c9175933500f33400003e/java

// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// multiples(3, 5.0)
// should return

// [5.0, 10.0, 15.0]

class Kata
{
    public static int[] multiples(int m, int n)
    {
        int result[] = new int[m];

        for(int i = 0; i < m; i++)
        {
            result[i] = n * (i + 1);
        }

        return result;
    }
}