// https://www.codewars.com/kata/52449b062fb80683ec000024

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str)
{
    if (!/\S/.test(str)){return false;}
    let ret = "";
    let split = str.split(" ");
    for(var i = 0; i < split.length; i++)
    {
        if(!split[i] == " ")
        {
            split[i] = split[i][0].toUpperCase() + split[i].substring(1);
        }
    }
    ret = "#" + split.join("");
    return ret.length > 140 ? false : ret;
}