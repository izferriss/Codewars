// https://www.codewars.com/kata/57814d79a56c88e3e0000786

<!--
    
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

 -->

function encrypt($text, $n)
{
    $evens = "";
    $odds = "";
    while($n > 0)
    {
        for($i = 0; $i < strlen($text); $i++)
        {
            if($i % 2 == 0)
            {
                $evens .= $text[$i];
            }
            else
            {
                $odds .= $text[$i];
            }
        }  
        $text = $odds . $evens;
        $evens = "";
        $odds = "";
        $n--;
    }

    return $text;
}

function decrypt($text, $n)
{
    $evens = "";
    $odds = "";
    $len = strlen($text);
    echo "text: ".$text."\n";
    $temp = "";
    $flip = false;
    $actioned = false;
    while($n > 0)
    {
        for($i = floor(($len) / 2); $i < $len; $i+0)
        {
            $temp .= $text[$i];
            if($flip)
            {
                $i += floor($len / 2);
                $i++;
                $flip = false;
            }
            else
            {
                $i -= floor($len / 2);
                $flip = true;
            }
        }
        $text = $temp;
        $temp = "";
        $n--;
        $actioned = true;
    }
    if($actioned && $len % 2 != 0)
        $text = substr_replace($text ,"",-1); 
    return  $text;
}