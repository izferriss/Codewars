// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x)
{
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
    x = x.split(" ");
    let greatest = 0;
    let index = 0;
    for(var i = 0; i < x.length; i++)
    {
        let sum = 0;
        for(var j = 0; j < x[i].length; j++)
        {
            sum += alpha.indexOf(x[i][j]) + 1;
        }
        if(sum > greatest)
        {
            greatest = sum;
            index = i;
        }
    }

    return x[index];
}