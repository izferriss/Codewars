// https://www.codewars.com/kata/5a9e86705ee396d6be000091

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

function checkThreeAndTwo(array)
{
    let count_a = 0;
    let count_b = 0;
    let count_c = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == "a"){count_a++;}
        if(array[i] == "b"){count_b++;}
        if(array[i] == "c"){count_c++;}
    }
    return  (count_a == 3 && count_b == 2) ||
            (count_a == 2 && count_b == 3) ||
            (count_a == 3 && count_c == 2) ||
            (count_a == 2 && count_c == 3) ||
            (count_b == 3 && count_c == 2) ||
            (count_b == 2 && count_c == 3);
}