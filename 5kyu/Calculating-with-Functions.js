// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function num_or_math(num, oper)
{
if(!oper)   {return num;}
else        {return oper(num);}
}

function zero(operator) {return num_or_math(0, operator);}
function one(operator)  {return num_or_math(1, operator);}
function two(operator)  {return num_or_math(2, operator);}
function three(operator){return num_or_math(3, operator);}
function four(operator) {return num_or_math(4, operator);}
function five(operator) {return num_or_math(5, operator);}
function six(operator)  {return num_or_math(6, operator);}
function seven(operator){return num_or_math(7, operator);}
function eight(operator){return num_or_math(8, operator);}
function nine(operator) {return num_or_math(9, operator);}

function plus(rnum)     {return function domath(lnum){return lnum+rnum};}
function minus(rnum)    {return function domath(lnum){return lnum-rnum};}
function times(rnum)    {return function domath(lnum){return lnum*rnum};}
function dividedBy(rnum){return function domath(lnum){return Math.floor(lnum/rnum)};}