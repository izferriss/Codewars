// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (str)
{
    var index = -1;
    var flag = true;
    var output = "";

    //If string contains numbers
    if(str.match(/\d/g))
    {
        var num = str.match(/\d/g); 
        num = num.join("");
        num = parseInt(num) + 1;
    }

    for(var i = 0; i < str.length; i++)
    {
        if(str[i] >= 0 && str[i] <= 9 && flag)
        {
            index = i;
            flag = false;
        }
    }
    //If string contains numbers
    if(!flag)
    {
        for(var i = 0; i < index; i++)
        {
            output += str[i];
        }
        output += String(num.toString()).padStart(str.length - index, '0');
    }
    //If string does not contain numbers
    else
    {
        output = str + "1";
    }
    return output;
}
