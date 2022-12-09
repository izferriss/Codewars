// https://www.codewars.com/kata/57f8ff867a28db569e000c4a

// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str)
{
    let retStr = "";
    str = str.replace(/[0-9]/g, "");
    for(var i = 0; i < str.length; i++)
    {
        if(str[i] == str[i].toUpperCase())
        {
            retStr += "-" + str[i].toLowerCase();
        }
        else
        {
            retStr += str[i];
        }
    }

    if(retStr[0] == "-")
    {
        return retStr.slice(1);
    }
    else
    {
        return retStr;
    }
    
}