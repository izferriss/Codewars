// https://www.codewars.com/kata/581e014b55f2c52bb00000f8

// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

export function decipherThis(str: string): string
{
    let retStr : string = "";
    let spltStr : string[] = str.split(" ");
  
    for(var i = 0; i < spltStr.length; i++)
    {
        var temp = "";
        var newString = "";
        var count = 0;
        
        while(spltStr[i][count] >= '0' && spltStr[i][count] <= '9')
        {
            count++;
        }
        
        temp = String.fromCharCode(parseInt(spltStr[i].substring(0, count)));
        
        newString += temp + spltStr[i].substring(count);
        
        if(newString.length == 3)
        {
            newString = temp + newString[2] + newString[1];
        }
        else if(newString.length > 2)
        {
            var sec = newString[newString.length - 1];
            var last = newString[1];
            newString = temp + sec + newString.substring(2, newString.length - 1) + last;
        }
        else
        {
            
        }
        
        retStr += newString + " ";
    }

    return retStr.slice(0, -1);
}