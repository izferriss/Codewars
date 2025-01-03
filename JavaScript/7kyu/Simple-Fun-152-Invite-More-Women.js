// https://www.codewars.com/kata/58acfe4ae0201e1708000075

// Task
// King Arthur and his knights are having a New Years party. Last year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.

// To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men at this year's party. He gave you a list of integers of all the party goers.

// Arthur needs you to return true if he needs to invite more women or false if he is all set.

// Input/Output
// [input] integer array L ($a in PHP)
// An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women and 1 represents men.

// 2 <= L.length <= 50

// [output] a boolean value

// true if Arthur need to invite more women, false otherwise.

function inviteMoreWomen(L)
{
    let counts = L.reduce((acc, value) => ({...acc, [value]: (acc[value] || 0) + 1}), {});
    if(Object.keys(counts).includes('1') && Object.keys(counts).includes('-1')) //includes men and women
    {
        return counts['1'] > counts['-1'];
    }
    else if(Object.keys(counts).includes('1') && !Object.keys(counts).includes('-1')) // just men
    {
        return true;
    }
    else  //jsut women
    {
        return false;
    }
}