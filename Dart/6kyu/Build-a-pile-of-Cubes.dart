// https://www.codewars.com/kata/5592e3bd57b64d00f3000047

// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

import 'dart:math';

int findNb(int m) 
{
    var total = 0;
    var n = 0;

    while(total < m)
    {
        n++;
        total += pow(n, 3) as int;
    }

    if(total == m)
    {
        return n;
    }
    else
    {
        return -1;
    }
}