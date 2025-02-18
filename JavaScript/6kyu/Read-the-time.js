// https://www.codewars.com/kata/5c2b4182ac111c05cf388858

// Given time in 24-hour format, convert it to words.

// For example:
// 13:00 = one o'clock 
// 13:09 = nine minutes past one 
// 13:15 = quarter past one 
// 13:29 = twenty nine minutes past one
// 13:30 = half past one 
// 13:31 = twenty nine minutes to two
// 13:45 = quarter to two 
// 00:48 = twelve minutes to one
// 00:08 = eight minutes past midnight
// 12:00 = twelve o'clock
// 00:00 = midnight

// Note: If minutes == 0, use 'o'clock'. If minutes <= 30, use 'past', and for minutes > 30, use 'to'. 
// More examples in test cases. Good luck!

function solve(time)
{
    let hours = time.substring(0, time.indexOf(":") );
    let minutes = time.substring(time.indexOf(":") + 1);
    let words_minutes = ["o'clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "half", "twenty nine", "twenty eight", "twenty seven", "twenty six", "twenty five", "twenty four", "twenty three", "twenty two", "twenty one", "twenty", "nineteen", "eighteen", "seventeen", "sixteen", "quarter", "fourteen", "thirteen", "twelve", "eleven", "ten", "nine", "eight", "seven", "six", "five", "four", "three", "two", "one"];
    let words_hours = ["midnight", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"];

    let numeral_hours = parseInt(hours) == 24 ? 0 : parseInt(hours);
    let numeral_minutes = parseInt(minutes);

    if(numeral_minutes == 0)
    {
        if(numeral_hours == 0)
        {
            return words_hours[numeral_hours];
        }
        else
        {
            return words_hours[numeral_hours] + " " + words_minutes[numeral_minutes];
        }  
    }
    else if(numeral_minutes <= 30)
    {
        if(numeral_minutes == 15 || numeral_minutes == 30)
        {
            return words_minutes[numeral_minutes] + " past " + words_hours[numeral_hours];
        }
        else
        {
            if(numeral_minutes == 1)
            {
                return words_minutes[numeral_minutes] + " minute past " + words_hours[numeral_hours];
            }
            else
            {
                return words_minutes[numeral_minutes] + " minutes past " + words_hours[numeral_hours];
            }
        }
    }
    else
    {
        if(numeral_minutes == 59)
        {
            return words_minutes[numeral_minutes] + " minute to " + (words_hours[numeral_hours + 1] ? words_hours[numeral_hours + 1] : words_hours[0]);
        }
        else
        {
            if(numeral_minutes == 45)
            {
                return words_minutes[numeral_minutes] + " to " + (words_hours[numeral_hours + 1] ? words_hours[numeral_hours + 1] : words_hours[0]);
            }
            else
            {
                return words_minutes[numeral_minutes] + " minutes to " + (words_hours[numeral_hours + 1] ? words_hours[numeral_hours + 1] : words_hours[0]);
            }
        }
    }
}