// https://www.codewars.com/kata/59c633e7dcc4053512000073

// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// More examples in test cases. Good luck!

export function solve(s: string)
{
    let str = "";
    for(var i = 0; i < s.length; i++)
    {
        if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u')
        {
            str += ',';
        }
        else
        {
            str += s[i];
        }
    }

    const split = str.split(",");
    const alpha = new Map();
    alpha.set('a', 1);
    alpha.set('b', 2);
    alpha.set('c', 3);
    alpha.set('d', 4);
    alpha.set('e', 5);
    alpha.set('f', 6);
    alpha.set('g', 7);
    alpha.set('h', 8);
    alpha.set('i', 9);
    alpha.set('j', 10);
    alpha.set('k', 11);
    alpha.set('l', 12);
    alpha.set('m', 13);
    alpha.set('n', 14);
    alpha.set('o', 15);
    alpha.set('p', 16);
    alpha.set('q', 17);
    alpha.set('r', 18);
    alpha.set('s', 19);
    alpha.set('t', 20);
    alpha.set('u', 21);
    alpha.set('v', 22);
    alpha.set('w', 23);
    alpha.set('x', 24);
    alpha.set('y', 25);
    alpha.set('z', 26);

    let sum = 0;
    let max = 0;

    for(var i = 0; i < split.length; i++)
    {
        for(var j = 0; j < split[i].length; j++)
        {
            sum += alpha.get(split[i][j]);
        }
        if(sum > max)
        {
            max = sum;
        }
        sum = 0;
    }
    return max;
}
