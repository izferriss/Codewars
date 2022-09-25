// https://www.codewars.com/kata/529bf0e9bdf7657179000008

<!-- 
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

Examples
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false
-->

function valid_solution(array $m): bool
{
    //rows
    $row_1 = $m[0];
    $row_2 = $m[1];
    $row_3 = $m[2];
    $row_4 = $m[3];
    $row_5 = $m[4];
    $row_6 = $m[5];
    $row_7 = $m[6];
    $row_8 = $m[7];
    $row_9 = $m[8];

    //cols
    $col_1 = array($m[0][0], $m[0][1],$m[0][2], $m[0][3], $m[0][4], $m[0][5], $m[0][6], $m[0][7], $m[0][8]);
    $col_2 = array($m[1][0], $m[1][1],$m[1][2], $m[1][3], $m[1][4], $m[1][5], $m[1][6], $m[1][7], $m[1][8]);
    $col_3 = array($m[2][0], $m[2][1],$m[2][2], $m[2][3], $m[2][4], $m[2][5], $m[2][6], $m[2][7], $m[2][8]);
    $col_4 = array($m[3][0], $m[3][1],$m[3][2], $m[3][3], $m[3][4], $m[3][5], $m[3][6], $m[3][7], $m[3][8]);
    $col_5 = array($m[4][0], $m[4][1],$m[4][2], $m[4][3], $m[4][4], $m[4][5], $m[4][6], $m[4][7], $m[4][8]);
    $col_6 = array($m[5][0], $m[5][1],$m[5][2], $m[5][3], $m[5][4], $m[5][5], $m[5][6], $m[5][7], $m[5][8]);
    $col_7 = array($m[6][0], $m[6][1],$m[6][2], $m[6][3], $m[6][4], $m[6][5], $m[6][6], $m[6][7], $m[6][8]);
    $col_8 = array($m[7][0], $m[7][1],$m[7][2], $m[7][3], $m[7][4], $m[7][5], $m[7][6], $m[7][7], $m[7][8]);
    $col_9 = array($m[8][0], $m[8][1],$m[8][2], $m[8][3], $m[8][4], $m[8][5], $m[8][6], $m[8][7], $m[8][8]);

    //groupings
    $grp_1 = array($m[0][0], $m[0][1],$m[0][2], $m[1][0], $m[1][1], $m[1][2], $m[2][0], $m[2][1], $m[2][2]);
    $grp_2 = array($m[0][3], $m[0][4],$m[0][5], $m[1][3], $m[1][4], $m[1][5], $m[2][3], $m[2][4], $m[2][5]);
    $grp_3 = array($m[0][6], $m[0][7],$m[0][8], $m[1][6], $m[1][7], $m[1][8], $m[2][6], $m[2][7], $m[2][8]);
    $grp_4 = array($m[3][0], $m[3][1],$m[3][2], $m[4][0], $m[4][1], $m[4][2], $m[5][0], $m[5][1], $m[5][2]);
    $grp_5 = array($m[3][3], $m[3][4],$m[3][5], $m[4][3], $m[4][4], $m[4][5], $m[5][3], $m[5][4], $m[5][5]);
    $grp_6 = array($m[3][6], $m[3][7],$m[3][8], $m[4][6], $m[4][7], $m[4][8], $m[5][6], $m[5][7], $m[5][8]);
    $grp_7 = array($m[6][0], $m[6][1],$m[6][2], $m[7][0], $m[7][1], $m[7][2], $m[8][0], $m[8][1], $m[8][2]);
    $grp_8 = array($m[6][3], $m[6][4],$m[6][5], $m[7][3], $m[7][4], $m[7][5], $m[8][3], $m[8][4], $m[8][5]);
    $grp_9 = array($m[6][6], $m[6][7],$m[6][8], $m[7][6], $m[7][7], $m[7][8], $m[8][6], $m[8][7], $m[8][8]);

    if( in_array("0", $row_1) || in_array("0", $row_2) || in_array("0", $row_3) || 
        in_array("0", $row_4) || in_array("0", $row_5) || in_array("0", $row_6) ||
        in_array("0", $row_7) || in_array("0", $row_8) || in_array("0", $row_9) ||
        in_array("0", $col_1) || in_array("0", $col_2) || in_array("0", $col_3) || 
        in_array("0", $col_4) || in_array("0", $col_5) || in_array("0", $col_6) ||
        in_array("0", $col_7) || in_array("0", $col_8) || in_array("0", $col_9) ||
        in_array("0", $grp_1) || in_array("0", $grp_2) || in_array("0", $grp_3) || 
        in_array("0", $grp_4) || in_array("0", $grp_5) || in_array("0", $grp_6) ||
        in_array("0", $grp_7) || in_array("0", $grp_8) || in_array("0", $grp_9)) 
    {
        return false;
    }
    if( count(array_unique($row_1)) < 9 || count(array_unique($row_2)) < 9 || count(array_unique($row_3)) < 9 ||
        count(array_unique($row_4)) < 9 || count(array_unique($row_5)) < 9 || count(array_unique($row_6)) < 9 ||
        count(array_unique($row_7)) < 9 || count(array_unique($row_8)) < 9 || count(array_unique($row_9)) < 9 ||
        count(array_unique($col_1)) < 9 || count(array_unique($col_2)) < 9 || count(array_unique($col_3)) < 9 ||
        count(array_unique($col_4)) < 9 || count(array_unique($col_5)) < 9 || count(array_unique($col_6)) < 9 ||
        count(array_unique($col_7)) < 9 || count(array_unique($col_8)) < 9 || count(array_unique($col_9)) < 9 ||
        count(array_unique($grp_1)) < 9 || count(array_unique($grp_2)) < 9 || count(array_unique($grp_3)) < 9 ||
        count(array_unique($grp_4)) < 9 || count(array_unique($grp_5)) < 9 || count(array_unique($grp_6)) < 9 ||
        count(array_unique($grp_7)) < 9 || count(array_unique($grp_8)) < 9 || count(array_unique($grp_9)) < 9)
    {
        return false;
    }

    return true;
}