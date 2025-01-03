// https://www.codewars.com/kata/526989a41034285187000de4

// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipsBetween(start, end)
{
    let bStart = start.split('.').reduce((sum, x)=> sum << 8 | x, 0) >>> 0;
    let bEnd = end.split('.').reduce((sum, x)=> sum << 8 | x, 0) >>> 0;

    return bEnd - bStart;
}