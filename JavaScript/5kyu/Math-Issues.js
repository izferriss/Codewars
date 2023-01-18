// https://www.codewars.com/kata/5267faf57526ea542e0007fb

// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

Math.round = function(number)
{
    return Number.isInteger(number) ? number : (number | 0) + .5 > number ? ~~number : -~number;
};

Math.ceil = function(number)
{
    return Number.isInteger(number) ? number : -~number;
};

Math.floor = function(number)
{
    return Number.isInteger(number) ? number : ~~number;
}