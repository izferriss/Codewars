// https://www.codewars.com/kata/52fb87703c1351ebd200081f

// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year)
{
    let century = Math.ceil(parseFloat((year[0] + year[1] + year[2] + year[3]) / 100)).toString();
    if(century[0] != "1" && century[1] == "1"){return century + "st";}
    else if(century[0] != "1" && century[1] == "2"){return century + "nd";}
    else if(century[0] != "1" && century[1] == "3"){return century + "rd";}
    else{return century + "th";}
}