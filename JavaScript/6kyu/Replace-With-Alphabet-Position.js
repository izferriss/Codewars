// https://www.codewars.com/kata/546f922b54af40e1e90001da

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text)
{
    var str = "";
    const alpha_map = new Map();
    alpha_map.set('a', 1);
    alpha_map.set('b', 2);
    alpha_map.set('c', 3);
    alpha_map.set('d', 4);
    alpha_map.set('e', 5);
    alpha_map.set('f', 6);
    alpha_map.set('g', 7);
    alpha_map.set('h', 8);
    alpha_map.set('i', 9);
    alpha_map.set('j', 10);
    alpha_map.set('k', 11);
    alpha_map.set('l', 12);
    alpha_map.set('m', 13);
    alpha_map.set('n', 14);
    alpha_map.set('o', 15);
    alpha_map.set('p', 16);
    alpha_map.set('q', 17);
    alpha_map.set('r', 18);
    alpha_map.set('s', 19);
    alpha_map.set('t', 20);
    alpha_map.set('u', 21);
    alpha_map.set('v', 22);
    alpha_map.set('w', 23);
    alpha_map.set('x', 24);
    alpha_map.set('y', 25);
    alpha_map.set('z', 26);
  
  
    for(var i = 0; i < text.length; i++)
    {
        if(alpha_map.has(text[i].toLowerCase()))
        {
            str += alpha_map.get(text[i].toLowerCase()) + " ";
        }
    }
    return str.trimEnd();
}