// https://www.codewars.com/kata/51e056fe544cf36c410000fb

// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]
// Bonus points (not really, but just for fun):
// Avoid creating an array whose memory footprint is roughly as big as the input text.
// Avoid sorting the entire array of unique words.

function topThreeWords(text) 
{
    var words_map = new Map();
    text = text.toLowerCase();
    text = text.split(" ");
    for(var i = 0; i < text.length; i++)
    {
        if(!words_map.has(text[i]))
        {
            if(text[i] != '' && text[i].indexOf('.') == -1 && text[i].indexOf(',') == -1)
            {
                if(text[i] != '\'')
                {
                    words_map.set(text[i].replace('//', ''), 1);
                }
            }
        }
        else
        {
            words_map.set(text[i], words_map.get(text[i]) + 1);
        }
    }

    const sorted_map = new Map([...words_map.entries()].sort((a, b) => b[1] - a[1]));
    const complete_arr = [];

    if(sorted_map.size === 0)
    {
        return complete_arr;
    }
    if(sorted_map.size > 0)
    {
        complete_arr.push([...sorted_map][0][0]);
    }
    if(sorted_map.size > 1)
    {
        complete_arr.push([...sorted_map][1][0]);
    }
    if(sorted_map.size > 2)
    {
        complete_arr.push([...sorted_map][2][0]);
    }
    return complete_arr;
}