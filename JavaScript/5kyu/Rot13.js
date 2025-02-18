// https://www.codewars.com/kata/530e15517bc88ac656000716

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message)
{
    var output = "";
    var temp_char;
    for(var i = 0; i < message.length; i++)
    {
        if(isLetter(message[i]))
        {
            
            temp_char = message[i].charCodeAt(0);
            temp_char += 13;
            
            //lowercase
            if(message[i].charCodeAt(0) >= 97 && message[i].charCodeAt(0) <= 122 && temp_char > 122)
            {
                temp_char -= 26;
            }
            
            //uppercase
            else if(message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) <= 90 && temp_char > 90)
            {
                temp_char -= 26;
            }
            
            output+= String.fromCharCode(temp_char);
        }
        else
        {
            output+= message[i];
        }
    }

    return output;
}

function isLetter(char)
{
    return (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z');
}