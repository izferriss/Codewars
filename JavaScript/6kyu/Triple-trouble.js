// https://www.codewars.com/kata/55d5434f269c0c3f1b000058

// Write a function

// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

function tripledouble(num1, num2)
{
    if(num1.toString().includes("000") && num2.toString().includes("00")){return 1;}
    if(num1.toString().includes("111") && num2.toString().includes("11")){return 1;}
    if(num1.toString().includes("222") && num2.toString().includes("22")){return 1;}
    if(num1.toString().includes("333") && num2.toString().includes("33")){return 1;}
    if(num1.toString().includes("444") && num2.toString().includes("44")){return 1;}
    if(num1.toString().includes("555") && num2.toString().includes("55")){return 1;}
    if(num1.toString().includes("666") && num2.toString().includes("66")){return 1;}
    if(num1.toString().includes("777") && num2.toString().includes("77")){return 1;}
    if(num1.toString().includes("888") && num2.toString().includes("88")){return 1;}
    if(num1.toString().includes("999") && num2.toString().includes("99")){return 1;}
    return 0;
}