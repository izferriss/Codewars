// https://www.codewars.com/kata/525caa5c1bf619d28c000335

<!--

If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

-->

function is_solved(array $board): int 
{
    $empty = "0";
    $X = "1";
    $O = "2";
  
    //check for X win
    if(($board[0][0] == $X && $board[0][1] == $X && $board[0][2] == $X) ||
       ($board[0][0] == $X && $board[1][0] == $X && $board[2][0] == $X) ||
       ($board[0][0] == $X && $board[1][1] == $X && $board[2][2] == $X) ||
       ($board[0][1] == $X && $board[1][1] == $X && $board[2][1] == $X) ||
       ($board[0][2] == $X && $board[1][2] == $X && $board[2][2] == $X) ||
       ($board[0][2] == $X && $board[1][1] == $X && $board[2][0] == $X) ||
       ($board[1][0] == $X && $board[1][1] == $X && $board[1][2] == $X) ||
       ($board[2][0] == $X && $board[2][1] == $X && $board[2][2] == $X))
    {
        return 1;
    }

    //check for O win
    if(($board[0][0] == $O && $board[0][1] == $O && $board[0][2] == $O) ||
       ($board[0][0] == $O && $board[1][0] == $O && $board[2][0] == $O) ||
       ($board[0][0] == $O && $board[1][1] == $O && $board[2][2] == $O) ||
       ($board[0][1] == $O && $board[1][1] == $O && $board[2][1] == $O) ||
       ($board[0][2] == $O && $board[1][2] == $O && $board[2][2] == $O) ||
       ($board[0][2] == $O && $board[1][1] == $O && $board[2][0] == $O) ||
       ($board[1][0] == $O && $board[1][1] == $O && $board[1][2] == $O) ||
       ($board[2][0] == $O && $board[2][1] == $O && $board[2][2] == $O))
    {
        return 2;
    }

    if(in_array($empty, $board[0]) ||
       in_array($empty, $board[1]) ||
       in_array($empty, $board[2]))
    {
        return -1;
    }
    else
    {
        return 0;
    }
}