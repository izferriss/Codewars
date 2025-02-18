// https://www.codewars.com/kata/589519d1f0902e01af000054

// Perimeter sequence
// The first three stages of a sequence are shown.

// 1       2           3
//                     +--+
//                     |  |
//         +--+        +--+--+
//         |  |        |  |  | 
// +--+    +--+--+     +--+--+--+
// |  |    |  |  |     |  |  |  |
// +--+    +--+--+     +--+--+--+

// The blocksize is a by a and a ≥ 1.

// What is the perimeter of the nth shape in the sequence (n ≥ 1) ?

function perimeterSequence(a,n)
{
    return n * 4 * a;
}

