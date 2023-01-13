// https://www.codewars.com/kata/54e6533c92449cc251001667

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable)
{
    let result = [];
    for(var i = iterable.length - 1; i >= 0; i--)
    {
        if(iterable[i] != iterable[i - 1])
        {
            result.unshift(iterable[i]);
        }
    }
    return result;
}