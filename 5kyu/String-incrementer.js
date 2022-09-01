function incrementString (str)
{
    var index = -1;
    var flag = true;
    var output = "";

    //If string contains numbers
    if(str.match(/\d/g))
    {
        var num = str.match(/\d/g); 
        num = num.join("");
        num = parseInt(num) + 1;
    }
    //Find starting index pos of number
    for(var i = 0; i < str.length; i++)
    {
        if(str[i] >= 0 && str[i] <= 9 && flag)
        {
            index = i;
            flag = false;
        }
    }
    //If string contains numbers
    if(!flag)
    {
        //Append non-numeric characters to output string
        for(var i = 0; i < index; i++)
        {
            output += str[i];
        }

        //Pad number string with leading zeros if necessary and append to output
        output += String(num.toString()).padStart(str.length - index, '0');
    }
    //If string does not contain numbers, add 1
    else
    {
        output = str + "1";
    }
    return output;
}
