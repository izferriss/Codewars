// https://www.codewars.com/kata/5226eb40316b56c8d500030f/train/javascript

// In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula

// (
// �
// �
// )
// =
// �
// !
// �
// !
// (
// �
// −
// �
// )
// !
// ( 
// k
// n
// ​
//  )= 
// k!(n−k)!
// n!
// ​
 
// where n denotes a row of the triangle, and k is a position of a term in the row.

// Pascal's Triangle

// You can read Wikipedia article on Pascal's Triangle for more information.

// Task
// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

// Example:
// n = 1: [1]
// n = 2: [1,  1, 1]
// n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
// Note
// Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on seleced method of calculations, intermediate values can be larger.

function pascalsTriangle(n)
{
    let arr = [];
    let i = 1;
    
    for(let j = 0; j < n; j++)
    {
        i = arr.length - j;
        for(let k = 0; k < j + 1; k++)
        {
            (k == 0 || k == j) ? arr.push(1) : arr.push(arr[i + k] + arr[i + k - 1]);
        }
    }

    return arr;
}