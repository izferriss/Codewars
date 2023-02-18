// https://www.codewars.com/kata/5413759479ba273f8100003d

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

reverse = function(array)
{
    let result = [];
    for(var i = array.length - 1; i >= 0; i--)
    {
        result.push(array[i]);
    }
    return result;
}