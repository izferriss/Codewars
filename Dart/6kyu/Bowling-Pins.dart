// https://www.codewars.com/kata/585cf93f6ad5e0d9bf000010

// Did you ever play Bowling? Short: You have to throw a bowl into 10 Pins arranged like this:


// I I I I  # each Pin has a Number:    7 8 9 10
//  I I I                                4 5 6
//   I I                                  2 3
//    I                                    1

// You will get an Array with Numbers, e.g.: [3,5,9] and remove them from the field like this:


// I I   I
//  I   I
//   I   
//    I   

// Return a string with the current field.

// Note that:
// You begin a new line with \n
// Each Line must be 7 chars long
// Fill the missing pins with a whitespace

String bowling_pins(List<int> pins) 
{
    var full = "I I I I\n I I I \n  I I  \n   I   ";

    var one = 27;
    var two = 18;
    var three = 20;
    var four = 9;
    var five = 11;
    var six = 13;
    var seven = 0;
    var eight = 2;
    var nine = 4;
    var ten = 6;

    for(var i = 0; i < pins.length; i++)
    {
        if(pins[i] == 1)
        {
            full = full.substring(0, one) + " " + full.substring(one + 1);
        }
        if(pins[i] == 2)
        {
            full = full.substring(0, two) + " " + full.substring(two + 1);
        }
        if(pins[i] == 3)
        {
            full = full.substring(0, three) + " " + full.substring(three + 1);
        }
        if(pins[i] == 4)
        {
            full = full.substring(0, four) + " " + full.substring(four + 1);
        }
        if(pins[i] == 5)
        {
            full = full.substring(0, five) + " " + full.substring(five + 1);
        }
        if(pins[i] == 6)
        {
            full = full.substring(0, six) + " " + full.substring(six + 1);
        }
        if(pins[i] == 7)
        {
            full = full.substring(0, seven) + " " + full.substring(seven + 1);
        }
        if(pins[i] == 8)
        {
            full = full.substring(0, eight) + " " + full.substring(eight + 1);
        }
        if(pins[i] == 9)
        {
            full = full.substring(0, nine) + " " + full.substring(nine + 1);
        }
        if(pins[i] == 10)
        {
            full = full.substring(0, ten) + " " + full.substring(ten+ 1);
        }

    }

    return full;
}