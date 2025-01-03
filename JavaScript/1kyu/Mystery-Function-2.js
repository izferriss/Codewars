// https://www.codewars.com/kata/55041210decf057109000277

// Finished Mystery function #1( http://www.codewars.com/kata/mystery-function-number-1 )?

// Here's a new (read REALLY HARD) challenge for you. There's a mysterious hash function which is already available for you to use. It's a function called mystery that accepts an integer as a parameter and outputs a integer. The exercise depends on guessing what this function actually creates its hash.

// You can call the mystery function like this:

//    var myOutput = mystery(123);
// Using your own test cases, try to call the mystery function with different input numbers and try to analyze its output in order to guess what is does. You are free to call the mystery function ONLY ONCE.

// When you think you've understood how my mystery function works, prove it by reimplementing its logic in a function that you should call 'solved(x)'. To validate your code, your function 'solved' should return the same output as my function 'mystery' given the same inputs.

// Beware! Passing your own test cases doesn't imply you'll pass mine. Learn about hash functions here:http://en.wikipedia.org/wiki/Hash_function

// Cheaters are welcome :) Using statistics on bits is a good way of solving this.

// Good luck and Have fun!

var solved=function(arg)
{
    var h = 5381;
    var n = arg & arg;

    while (n != 0 && n != -1)
    {
        var c = arg & 255;
        n >>= 8;
        h = ((h << 5) + h) + c;
        h = h & h;
    }
    return h ^ 5875174;
}