// https://www.codewars.com/kata/5c7254fcaccda64d01907710

// Description
// You've been working with a lot of different file types recently as your interests have broadened.

// But what file types are you using the most? With this question in mind we look at the following problem.

// Given a List/Array of Filenames (strings) files return a List/Array of string(s) containing the most common extension(s). If there is a tie, return a sorted list of all extensions.

// Important Info:
// Don't forget, you've been working with a lot of different file types, so expect some interesting extensions/file names/lengths in the random tests.
// Filenames and extensions will only contain letters (case sensitive), and numbers.
// If a file has multiple extensions (ie: mysong.mp3.als) only count the last extension (.als in this case)
// Examples
// files = ['Lakey - Better days.mp3', 
//          'Wheathan - Superlove.wav', 
//          'groovy jam.als', 
//          '#4 final mixdown.als', 
//          'album cover.ps', 
//          'good nights.mp3']
// would return: ['.als', '.mp3'], as both of the extensions appear two times in files.

// files = ['Lakey - Better days.mp3', 
//          'Fisher - Stop it.mp3', 
//          'Fisher - Losing it.mp3', 
//          '#4 final mixdown.als', 
//          'album cover.ps', 
//          'good nights.mp3']
// would return ['.mp3'], because it appears more times then any other extension, and no other extension has an equal amount of appearences.

function solve(files)
{
    let freq = {};
    for (const file of files)
    {
        freq[file.substr(file.lastIndexOf("."))] = freq[file.substr(file.lastIndexOf("."))] ? freq[file.substr(file.lastIndexOf("."))] + 1 : 1;
    }
    let filtered = Object.entries(freq).filter(([key, value]) => value == Math.max(...Object.values(freq)));
    let result = [];
    for(var i = 0; i < filtered.length; i++)
    {
        result.push(filtered[i][0]);
    }
    return result.sort();
}