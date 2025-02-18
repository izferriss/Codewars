// https://www.codewars.com/kata/56882731514ec3ec3d000009/

// Connect Four
// Take a look at wiki description of Connect Four game:

// Wiki Connect Four

// The grid is 6 row by 7 columns, those being named from A to G.

// You will receive a list of strings showing the order of the pieces which dropped in columns:

// std::vector<std::string> pieces_position_list
// {
//   "A_Red",
//   "B_Yellow",
//   "A_Red",
//   "B_Yellow",
//   "A_Red",
//   "B_Yellow",
//   "G_Red",
//   "B_Yellow"
// }
// The list may contain up to 42 moves and shows the order the players are playing.

// The first player who connects four items of the same color is the winner.

// You should return "Yellow", "Red" or "Draw" accordingly.

#include <iostream>
#include <string>
#include <vector>

void insertPiece(int player, int pos);
void processMove(std::string play);
bool checkForWin(int player);
std::string handleGameOver(std::string player = "");

const int COLS = 7;
const int ROWS = 6;
const int EMPTY = 8;
const int RED = 0;
const int YELLOW = 1;

int board[ROWS][COLS];
int numberMoves = 0;
bool gameOver = false;
bool isDraw = false;

std::string who_is_winner(std::vector<std::string> pieces_position_list)
{
    for(int i = 0; i < ROWS; i++)
    {
        for(int j = 0; j < COLS; j++)
        {
            board[i][j] = EMPTY;
        }
    }

    for(int p = 0; p < (int)pieces_position_list.size(); p++)
    {
        if(numberMoves < 43 && !gameOver)
        {
            processMove(pieces_position_list[p]);
            if(gameOver)
            {
                return handleGameOver(pieces_position_list[p].substr(2,1));
            }
        }
        else
        {
            return handleGameOver(pieces_position_list[p].substr(2,1));
        }
    }
    if(!gameOver && !isDraw)
    {
        gameOver = true;
        isDraw = true;
        return handleGameOver();
    }
}


void processMove(std::string play)
{
    std::string col = play.substr(0, 1);
    std::string color = play.substr(2,1);

    int player;

    if(color == "R")
    {
        player = RED;
    }
    else//color == "Y"
    {
        player = YELLOW;
    }

    numberMoves++;

    if(col == "A")
    {
        insertPiece(player, 0);
    }
    else if(col == "B")
    {
        insertPiece(player, 1);
    }
    else if(col == "C")
    {
        insertPiece(player, 2);
    }
    else if(col == "D")
    {
        insertPiece(player, 3);
    }
    else if(col == "E")
    {
        insertPiece(player, 4);
    }
    else if(col == "F")
    {
        insertPiece(player, 5);
    }
    else if(col == "G")
    {
        insertPiece(player, 6);
    }
    else
    {
        //no
    }
}

void insertPiece(int player, int pos)
{
    int i = ROWS - 1;
    bool inserted = false;

    while(i >= 0 && !inserted)
    {
        if(board[i][pos] == EMPTY)
        {
            board[i][pos] = player;
            inserted = true;
        }
        else
        {
            i--;
        }
    }

    if(numberMoves > 6 && numberMoves <= 42)
    {
        gameOver = checkForWin(player);
    }
    else if(numberMoves > 42)
    {
        gameOver = true;
        isDraw = true;
    }
}

bool checkForWin(int player)
{
    //Horizontal
    for(int j = 0; j < COLS - 3; j++)
    {
        for(int i = 0; i < ROWS; i++)
        {
            if(board[i][j] == player && board[i][j + 1] == player &&
                board[i][j + 2] == player && board[i][j + 3] == player)
            {
                return true;
            } 
        }
    }
    //Vertical
    for(int i = 0; i < ROWS - 3; i++)
    {
        for(int j = 0; j < COLS; j++)
        {
            if(board[i][j] == player && board[i + 1][j ] == player &&
                board[i + 2][j] == player && board[i + 3][j] == player)
            {
                return true;
            } 
        }
    }

    //Diagonal asc.
    for(int i = 3; i < ROWS; i++)
    {
        for(int j = 0; j < COLS - 3; j++)
        {
            if(board[i][j] == player && board[i - 1][j + 1] == player &&
               board[i - 2][j + 2] == player && board[i - 3][j + 3] == player) 
            {
                return true;
            } 
        }
    }

    //Diagonal desc.
    for(int i = 3; i < ROWS; i++)
    {
        for(int j = 3; j < COLS; j++)
        {
            if(board[i][j] == player && board[i - 1][j - 1] == player &&
               board[i - 2][j - 2] == player && board[i - 3][j - 3] == player) 
            {
                return true;
            } 
        }
    }

    return false;
}

std::string handleGameOver(std::string player)
{
    if(gameOver)
    {
        gameOver = false;

        if(isDraw)
        {
            numberMoves = 0;
            isDraw = false;
            return "Draw";
        }
        else
        {
            if(player == "R")
            {
                numberMoves = 0;
                return "Red";
            }
            else
            {
                numberMoves = 0;
                return "Yellow";
            }
        }
    }
}