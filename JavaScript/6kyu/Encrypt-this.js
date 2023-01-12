// https://www.codewars.com/kata/5848565e273af816fb000449

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text)
{
    let split = text.split(" ");
    let result = [];
    for(var i = 0; i < split.length; i++)
    {
        if(split[i].length == 1)
        {
            result.push(split[i][0].charCodeAt(0).toString());
        }
        else if(split[i].length == 2)
        {
            result.push(split[i][0].charCodeAt(0).toString() + split[i][1]);
        }
        else
        {
            let temp = split[i].charCodeAt(0).toString();
            temp += split[i][split[i].length - 1];
            for(var j = 2; j < split[i].length - 1; j++)
            {
                temp += split[i][j];
            }
            temp += split[i][1];
            result.push(temp);
        }
    }
                    
    return result.join(" ");
}