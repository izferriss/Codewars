// https://www.codewars.com/kata/5b853229cfde412a470000d0

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld)
{
    let count = 0;
    while(count != (sonYearsOld * 2))
    {
        count++;
    }
    
    return Math.abs(dadYearsOld - count);
}