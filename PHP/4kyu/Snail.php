// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
<!-- 
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
 -->

function snail(array $array): array
{
    $done = false;
    $direction = "right";
    $initcount = count($array[0]) * count($array);
    $x_min = 0;
    $x_max = count($array[0]) - 1;
    $y_min = 0;
    $y_max = count($array) - 1;
    $x_curr = $x_min;
    $y_curr = $y_min;
    $snailsorted = array();

    if($initcount == 0)
    {
        return [];
    }

    while(!$done)
    {
        switch($direction)
        {
            case "right":
                $x_curr = $x_min;
                $y_curr = $y_min;
                for($y_curr; $y_curr <= $y_max; $y_curr++)
                {
                    $snailsorted[] = $array[$x_curr][$y_curr];
                }
                $direction = "down";
                $x_min++;
                break;
            case "left":
                $x_curr = $x_max;
                $y_curr = $y_max;
                for($y_curr; $y_curr >= $y_min; $y_curr--)
                {
                    $snailsorted[] = $array[$x_curr][$y_curr];
                }
                $direction = "up";
                $x_max--;
                break;
            case "down":
                $x_curr = $x_min;
                $y_curr = $y_max;
                for($x_curr; $x_curr <= $x_max; $x_curr++)
                {
                    $snailsorted[] = $array[$x_curr][$y_curr];
                }
                $direction = "left";
                $y_max--;
                break;
            case "up":
                $x_curr = $x_max;
                $y_curr = $y_min;
                for($x_curr; $x_curr >= $x_min; $x_curr--)
                {
                    $snailsorted[] = $array[$x_curr][$y_curr];
                }
                $direction = "right";
                $y_min++;
                break;
        }

        if($x_min > $x_max || $y_min > $y_max || count($snailsorted) == $initcount)
        {
            $done = true;
        }
    }
    return $snailsorted;
}