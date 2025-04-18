// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

long int findNextSquare(long int sq)
{
    int count = 0;
    int odd_num = 1;
    while(sq > 0)
    {
        sq -= odd_num;
        count++;
        odd_num += 2;
    }
    if(sq == 0)
    {
        return ((long int)(count + 1) * (long int)(count + 1));
    }
    else
    {
        return -1;
    }
}