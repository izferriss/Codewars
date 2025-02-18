// https://www.codewars.com/kata/55c45be3b2079eccff00010f

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words)
{
    var wordsarr = words.split(' ');
    var wordmap = new Map();
    let pattern = /\d/g;
    var retstr = "";
    
    for(var i = 0; i < wordsarr.length; i++)
        {
        let str = wordsarr[i].toString();
    
        for(var j = 0; j < str.length; j++)
            {
            if(str[j].match(pattern))
                {
                //set map with numeric keys
                wordmap.set(str[j], wordsarr[i]);
                }
            }
        }
    
    //sort map by numeric keys
    var sorted = new Map([...wordmap.entries()].sort());
    
    sorted.forEach(function(value, key)
    {
        retstr += value + " ";
    })
    
    return retstr.trimEnd();
}