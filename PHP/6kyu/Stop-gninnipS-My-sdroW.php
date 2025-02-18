// https://www.codewars.com/kata/5264d2b162488dc400000001

<!-- 
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
-->

//The following line is for github's linguistics parser
<?php ?>

function spinWords(string $str): string
{
    $arr = explode(" ", $str);
    $ret = "";
    for($i = 0; $i < count($arr); $i++)
    {
        if(strlen($arr[$i]) >= 5)
        {
            $ret .= strrev($arr[$i]);
        }
        else
        {
            $ret .= $arr[$i];
        }
        if($i != count($arr) - 1)
        {
            $ret .= " ";
        }
    }
    return $ret;
}
