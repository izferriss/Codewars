// https://www.codewars.com/kata/514b92a657cdc65150000006

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

int solution(int n) 
{
    var sum = 0;
    var threes = 3;
    var fives = 5;
    while(threes < n)
    {
        sum += threes;
        threes += 3;
    }
    while(fives < n)
    {
        if(fives % 3 != 0)
        {
            sum += fives;
        }
        fives += 5;
    }
    return sum;
}