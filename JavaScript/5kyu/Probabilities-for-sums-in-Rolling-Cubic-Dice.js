// https://www.codewars.com/kata/56f78a42f749ba513b00037f

// P(8, 2) = 5/36 
// Things may be more complicated if we have more dices and sum values higher.

// We want to know the probability of having the sum equals to 8 but having 3 dice.

// Now the combinations and corresponding events are:

// {2,3,3}, {3,2,3}, {3,3,2}
// {2,2,4}, {2,4,2}, {4,2,2}
// {1,3,4}, {1,4,3}, {3,1,4}, {4,1,3}, {3,4,1}, {4,3,1}
// {1,2,5}, {1,5,2}, {2,1,5}, {5,1,2}, {2,5,1}, {5,2,1}
// {1,1,6}, {1,6,1}, {6,1,1}

// A total amount of 21 different combinations

// So the probability is:
// P(8, 3) = 21/(6*6*6) = 0.09722222222222222
// Summarizing the cases we have seen with a function that receives the two arguments

// rolldice_sum_prob(11, 2) == 0.0555555555 # or 1/18

// rolldice_sum_prob(8, 2) ==  0.13888888889# or 5/36

// rolldice_sum_prob(8, 3) == 0.0972222222222  # or 7/72
// And think why we have this result:

// rolldice_sum_prob(22, 3) == 0
// Create the function rolldice_sum_prob() for this calculation.

// Have a nice time!

// (You do not have to round the results)

function rolldiceSumProb(sum, dice)
{
    if(sum > dice * 6)
    {
        return 0;
    }
    else
    {
        let rolls = getAllRolls(6, dice);
        let count = getCountEqualToSum(sum, rolls);
        return (count/(Math.pow(6, dice)));
    }
}

// from https://observablehq.com/@kieranpringle/calculating-dice-probabilities-part-1
function getAllRolls(sides, numDice)
{    
    var rolls = [];

    if (numDice > 1)
    {
        var remainingDice = getAllRolls(sides, numDice - 1);
        remainingDice.forEach(roll =>
        { 
            for (var i = 1; i <= sides; i++)
            {
                rolls.push(roll.concat(i));
            }
        });
    }
    else 
    {
        for (var i = 1; i <= sides; i++)
        {
            rolls.push([i]);    
        }  
    }

    return rolls;
}

function getCountEqualToSum(target, rolls)
{
    let count = 0;
    for(var i = 0; i < rolls.length; i++)
    {
        let sum = rolls[i].reduce((a, b) => a + b, 0);
        if(sum == target)
        {
            count++;
        }
    }

    return count;
}