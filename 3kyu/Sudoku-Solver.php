// https://www.codewars.com/kata/5296bc77afba8baa690002d7

<!-- 
Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

For Sudoku rules, see the Wikipedia article.

sudoku([
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]
]); /* => [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
] */ 
-->

define('GRID_SIZE', 9);

function isNumberInRow(array $puzzle, int $number, int $row):bool
{
    for($i = 0; $i < GRID_SIZE; $i++)
    {
        if($puzzle[$row][$i] == $number)
        {
            return true;
        }
    }
    return false;
}

function isNumberInColumn(array $puzzle, int $number, int $col):bool
{
    for($i = 0; $i < GRID_SIZE; $i++)
    {
        if($puzzle[$i][$col] == $number)
        {
            return true;
        }
    }
    return false;
}

function isNumberInSubGrid(array $puzzle, int $number, int $row, int $col):bool
{
    //provides top-left location of the sub-grid
    $subGridRow = $row - $row % 3;
    $subGridCol = $col - $col % 3;

    for($i = $subGridRow; $i < $subGridRow + 3; $i++)
    {
        for($j = $subGridCol; $j < $subGridCol + 3; $j++)
        {
            if($puzzle[$i][$j] == $number)
            {
                return true;
            }
        }
    }

    return false;
}

function isValidPlacement(array $puzzle, int $number, int $row, int $col):bool
{
    return !isNumberInRow($puzzle, $number, $row) && !isNumberInColumn($puzzle, $number, $col) && !isNumberInSubGrid($puzzle, $number, $row, $col);
}

function solve(array &$puzzle):bool
{
    for($i = 0; $i < GRID_SIZE; $i++)
    {
        for($j = 0; $j < GRID_SIZE; $j++)
        {
            if($puzzle[$i][$j] == 0)
            {
                for($k = 1; $k <= GRID_SIZE; $k++)
                {
                    if(isValidPlacement($puzzle, $k, $i, $j))
                    {
                        $puzzle[$i][$j] = $k;
                        if(solve($puzzle))
                        {
                            return true;
                        }
                        else
                        {
                            $puzzle[$i][$j] = 0;
                        }
                    }
                }
                return false;
            } 
        }
    }
    return true;
}

function sudoku(array $puzzle): array
{
    if(solve($puzzle))
    {
        return $puzzle;
    }
    else
    {
        echo "did not solve\n";
    }
}

