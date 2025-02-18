// https://www.codewars.com/kata/52742f58faf5485cae000b9a

// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (seconds)
{
    let one_second = 1;
    let one_minute = 60;
    let one_hour = one_minute * 60;
    let one_day = one_hour * 24;
    let one_year = one_day * 365;

    const string_arr = [];
    var temp = 0;
    var output = "";

    if(seconds >= one_year)
    {
        while(seconds >= one_year)
        {
            seconds -= one_year;
            temp++;
        }
        if(temp > 1)
        {
            string_arr.push(temp + " years");
        }
        else
        {
            string_arr.push(temp + " year");
        }
    }

    temp = 0;

    if(seconds >= one_day)
    {
        while(seconds >= one_day)
        {
            seconds -= one_day;
            temp++;
        }
        if(temp > 1)
        {
            string_arr.push(temp + " days");
        }
        else
        {
            string_arr.push(temp + " day");
        }
    }

    temp = 0;

    if(seconds >= one_hour)
    {
        while(seconds >= one_hour)
        {
            seconds -= one_hour;
            temp++;
        }
        if(temp > 1)
        {
            string_arr.push(temp + " hours");
        }
        else
        {
            string_arr.push(temp + " hour");
        }
    }

    temp = 0;

    if(seconds >= one_minute)
    {
        while(seconds >= one_minute)
        {
            seconds -= one_minute;
            temp++;
        }
        if(temp > 1)
        {
            string_arr.push(temp + " minutes");
        }
        else
        {
            string_arr.push(temp + " minute");
        }
    }

    if(seconds > 1)
    {
        string_arr.push(seconds + " seconds");
    }
    else if(seconds == 1)
    {
        string_arr.push(seconds + " second");
    }
    else
    {
        //do nothing
    }
    
    if(string_arr.length == 0)
    {
        output = "now";
    }
    else
    {
    for(var i = 0; i < string_arr.length; i++)
    {
        if(string_arr.length == 1 || string_arr.length == 2)
        {
            output+= string_arr[i];
            break;
        }
        else
            {
            if(i < string_arr.length - 2)
                {
                output+= string_arr[i] + ", "
                }
            else if(i < string_arr.length - 1)
                {
                output+= string_arr[i] + " and ";
                break;
                }
            }
    }
    }
    if(string_arr.length == 2)
        {
        output+= " and " + string_arr[1];
        }
    else if(string_arr.length > 2)
        {
        output += string_arr[string_arr.length - 1];
        }

    return output;
}
  
