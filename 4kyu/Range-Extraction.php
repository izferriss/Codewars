// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

<!--
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
// returns '-10--8,-6,-3-1,3-5,7-11,14,15,17-20'
-->

function solution(array $list): string
{
    $ret = "";

    //Increment $i based on $j results
    for($i = 0; $i < count($list); $i = $j + 1)
    {
        //append current element
        $ret .= $list[$i];

        //as long as $list[$j] == $list[$j - 1] - 1, $list[$i] has a sequential range
        //This loop will break itself when there is not a sequential range
        for($j = $i + 1; $j < count($list) && $list[$j] == $list[$j - 1] + 1; $j++);
        
        //decrement j
        $j--;

        //single element not in range
        if($i == $j)
        {
            $ret .= ",";
        }
        //multiple elements non in range
        else if($i + 1 == $j)
        {
            $ret .= ",".$list[$j].",";
        }
        //range
        else
        {
            $ret .= "-".$list[$j].",";
        }
    }

    //remove trailing comma
    $ret = substr($ret, 0, -1);    
    return $ret;
}