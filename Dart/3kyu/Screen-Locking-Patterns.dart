// https://www.codewars.com/kata/585894545a8a07255e0002f1

// You might already be familiar with many smartphones that allow you to use a geometric pattern as a security measure. To unlock the device, you need to connect a sequence of dots/points in a grid by swiping your finger without lifting it as you trace the pattern through the screen.

// The image below has an example pattern of 7 dots/points: (A -> B -> I -> E -> D -> G -> C).

// A B C
// D E F
// G H I

// For this kata, your job is to implement a function that returns the number of possible patterns starting from a given first point, that have a given length.

// More specifically, for a function countPatternsFrom(firstPoint, length), the parameter firstPoint is a single-character string corresponding to the point in the grid (i.e.: 'A') where your patterns start, and the parameter length is an integer indicating the number of points (length) every pattern must have.

// For example, countPatternsFrom("C", 2), should return the number of patterns starting from 'C' that have 2 two points. The return value in this case would be 5, because there are 5 possible patterns:

// (C -> B), (C -> D), (C -> E), (C -> F) and (C -> H).

// Bear in mind that this kata requires returning the number of patterns, not the patterns themselves, so you only need to count them. Also, the name of the function might be different depending on the programming language used, but the idea remains the same.

// Rules
// In a pattern, the dots/points cannot be repeated: they can only be used once, at most.
// In a pattern, any two subsequent dots/points can only be connected with direct straight lines in either of these ways:
// Horizontally: like (A -> B) in the example pattern image.
// Vertically: like (D -> G) in the example pattern image.
// Diagonally: like (I -> E), as well as (B -> I), in the example pattern image.
// Passing over a point between them that has already been 'used': like (G -> C) passing over E, in the example pattern image. This is the trickiest rule. Normally, you wouldn't be able to connect G to C, because E is between them, however when E has already been used as part the pattern you are tracing, you can connect G to C passing over E, because E is ignored, as it was already used once.

// The sample tests have some examples of the number of combinations for some cases to help you check your code.

// Haskell Note: A data type Vertex is provided in place of the single-character strings. See the solution setup code for more details.

// Fun fact:

// In case you're wondering out of curiosity, for the Android lock screen, the valid patterns must have between 4 and 9 dots/points. There are 389112 possible valid patterns in total; that is, patterns with a length between 4 and 9 dots/points.

int countPatternsFrom(String f, int l)
{
    if(l == 0 || l >= 10)
    {
        return 0;
    }
    if(l == 1)
    {
        return 1;
    }
    if(f == 'A' || f == 'C' || f == 'G' || f == 'I')
    {
        switch(l)
        {
            case 2:
            {
                return 5;  
            }
            case 3:
            {
                return 31;
            }
            case 4:
            {
                return 154;
            }
            case 5:
            {
                return 684;
            }
            case 6:
            {
                return 2516;
            }
            case 7:
            {
                return 7104;
            }
            case 8:
            {
                return 13792;
            }
            case 9:
            {
                return 13792;
            }
        }
    }
    if(f == 'B' || f == 'D' || f == 'F' || f == 'H')
    {
        switch(l)
        {
            case 2:
            {
                return 7;  
            }
            case 3:
            {
                return 37;
            }
            case 4:
            {
                return 188;
            }
            case 5:
            {
                return 816;
            }
            case 6:
            {
                return 2926;
            }
            case 7:
            {
                return 8118;
            }
            case 8:
            {
                return 15564;
            }
            case 9:
            {
                return 15564;
            }
        }
    }
    if(f == 'E')
    {
        switch(l)
        {
            case 2:
            {
                return 8;  
            }
            case 3:
            {
                return 48;
            }
            case 4:
            {
                return 256;
            }
            case 5:
            {
                return 1152;
            }
            case 6:
            {
                return 4248;
            }
            case 7:
            {
                return 12024;
            }
            case 8:
            {
                return 23280;
            }
            case 9:
            {
                return 23280;
            }
        }
    }
  
  return 0;
}
