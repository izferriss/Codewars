// https://www.codewars.com/kata/53f40dff5f9d31b813000774

// There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in the secret string.

// You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.

var recoverSecret = function(triplets) 
{
    var sorted = [];
    var count = 0;
    var output = "";
    for(var i = 0; i < triplets.length; i++)
    {
        for(var j = 0; j < triplets[i].length; j++)
        {
            if(!sorted.find(c => c === triplets[i][j]))
            {
                sorted.push(triplets[i][j]);
                count++;
            }
        }
    }
    var flag = true;
    while(flag)
    {
        flag = false;
        triplets.forEach((item, index) => {
            for(let i = 0; i < 2; i++)
            {
                if(sorted.indexOf(item[i]) > sorted.indexOf(item[i + 1]))
                {
                    sorted.splice(sorted.indexOf(item[i]), 1, item[i + 1]);
                    sorted.splice(sorted.indexOf(item[i + 1]), 1, item[i]);
                    flag = true;
                }
            }
        });
    }
    console.log(sorted);
    for(var i = 0; i < count; i++)
    {
        output += sorted[i];
    }
    return output;
}
