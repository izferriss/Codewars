// https://www.codewars.com/kata/5503013e34137eeeaa001648

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n)
{
    let ret = "";
    if(n % 2 == 0 || n < 1)
    {
        return null;
    }
    else
    {
        
        let numSpaces = Math.floor(n/2);
        let numStars = 1;
        let currRow = 0;
        while(currRow < n)
        {
            let count = 0;
            if(currRow < Math.floor(n / 2))
            {
                while(count < numSpaces)
                {
                    ret += " ";
                    count++;
                }
                count = 0;
                while(count < numStars)
                {
                    ret += "*"
                    count++;
                }
                numSpaces--;
                numStars += 2;
            }
            else
            {
                while(count < numSpaces)
                {
                    ret += " ";
                    count++;
                }
                count = 0;
                while(count < numStars)
                {
                    ret += "*"
                    count++;
                }
                numSpaces++;
                numStars -= 2;
            }
            ret+="\n";
            currRow++;
        }
    }
    return ret;
}