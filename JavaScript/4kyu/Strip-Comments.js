// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers)
{
    var index = 0;
    var mark = 0;
    var eol = 0;
    while(index != -1)
    {
        mark = input.indexOf(markers[0], mark);
        eol = input.indexOf("\n", mark);
        if(eol == -1)
        {
            eol = input.length;
        }
        if(mark != -1)
        {
            input = input.substring(0, mark - 1) + input.substring(eol, input.length);
        }
        index = mark;
    }
    index = 0;
    mark = 0;
    while(index != -1)
    {
        mark = input.indexOf(markers[1], mark);
        eol = input.indexOf("\n", mark);
        if(eol == -1)
        {
            eol = input.length;
        }
        if(mark != -1)
        {
            input = input.substring(0, mark - 1) + input.substring(eol, input.length);
        }
        index = mark;
    }
    return input;
};