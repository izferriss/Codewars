// https://www.codewars.com/kata/5d50e3914861a500121e1958

// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

function addLetters(...letters)
{
    let sum = 0;
    for(var i = 0; i < letters.length; i++)
    {
        sum += letters[i].charCodeAt(0);
    }
    sum -= Math.abs(96 * letters.length);
    while(sum > 26){sum -= 26;}
    return sum + 96 >= 97 && sum + 96 <= 122 ? String.fromCharCode(sum + 96) : 'z';
}