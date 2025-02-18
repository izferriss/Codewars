// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str)
{
    str = str.toLowerCase();
    
    for(let i = 0; i < str.length; i++)
    {
        var count = 0;
        for(let j = 0; j < str.length; j++)
        {
            if(str[j]== str[i])
            {
                count++;
            }
            if(count > 1)
            {
              return false;
            }
        }
    }
    return true;
}