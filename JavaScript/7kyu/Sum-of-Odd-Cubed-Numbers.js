// https://www.codewars.com/kata/580dda86c40fa6c45f00028a

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr)
{
    let cubed = arr.map(elem => elem**3);
    let filtered = cubed.filter((elem) => elem % 2 != 0);
    return filtered.includes(NaN) ? undefined : filtered.length == 0 ? undefined : filtered.reduce((acc,elem) => acc += elem | 0);
}