// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(scrambled, solution)
{
    //short-circuit -- not enough letters on one side of the equation to satisfy solution
    if(scrambled.length < solution.length || solution.length > scrambled.length)
    {  
        return false;
    }
    else
    {
        //returns object with letter frequency
        let frequency = str =>
        {
            return str.split('').reduce((total, char) =>{
                total[char] ? total[char]++ : total[char] = 1;
                return total;
                }, {});
        };

        scr_freq = frequency(scrambled);
        sol_freq = frequency(solution);
    
        for(const letter in sol_freq)
        {
            //solution letter not found in scramble
            if(scr_freq[letter] == undefined)
            {
                return false;
            }
            else
            {
                //frequency of scramble letters not enough to satisfy solution
                if(sol_freq[letter] > scr_freq[letter])
                {
                    return false;
                }
            }
        }
    }
    return true;
}
