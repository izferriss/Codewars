// https://www.codewars.com/kata/587136ba2eefcb92a9000027

// Introduction
// Snakes and Ladders is an ancient Indian board game regarded today as a worldwide classic. It is played between two or more players on a gameboard having numbered, gridded squares. A number of "ladders" and "snakes" are pictured on the board, each connecting two specific board squares. (Source Wikipedia)

// Task
// Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.
// The Board

// Rules
// 1.  There are two players and both start off the board on square 0.

// 2.  Player 1 starts and alternates with player 2.

// 3.  You follow the numbers up the board in order 1=>100

// 4.  If the value of both die are the same then that player will have another go.

// 5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).

// 6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).

// 7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

// 8.  If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.
// Returns
// Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.

// Return Game over! if a player has won and another player tries to play.

// Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.
// Good luck and enjoy!

#include <string>
#include <sstream>

class SnakesLadders
{
    public:
        SnakesLadders(){};
        std::string play(int die1, int die2);
        int getPos(int player);
        void setPos(int player, int position);
        void movePlayer(int player, int roll);
        int checkLanding(int pos);
        std::string outputPos(int player);
        bool isPlaying = true;
        bool p1_turn = true;
        bool p2_turn = false;
    private:
        int p1_pos = 0;
        int p2_pos = 0;
        int board[101] = {   0,  1, 38,  3,  4,  5,  6, 14, 31,  9,
                            10, 11, 12, 13, 14, 26,  6, 17, 18, 19,
                            20, 42, 22, 23, 24, 25, 26, 27, 84, 29,
                            30, 31, 32, 33, 34, 35, 44, 37, 38, 39,
                            40, 41, 42, 43, 44, 45, 25, 47, 48, 11,
                            50, 67, 52, 53, 54, 55, 56, 57, 58, 59,
                            60, 61, 19, 63, 60, 65, 66, 67, 68, 69,
                            70, 91, 72, 73, 53, 75, 76, 77, 98, 79,
                            80, 81, 82, 83, 84, 85, 86, 94, 88, 68,
                            90, 91, 88, 93, 94, 75, 96, 97, 98, 80,
                            100
                         };
};

std::string SnakesLadders::play(int die1, int die2)
{
    if(p1_turn)
    {
        movePlayer(1, die1 + die2);
        if(die1 != die2)
        {
            p1_turn = false;
            p2_turn = true;
        }
        return outputPos(1);
    }
    else //if(p2_turn)
    {
        movePlayer(2, die1 + die2);
        if(die1 != die2)
        {
            p2_turn = false;
            p1_turn = true;
        }
        return outputPos(2);
    }
}

int SnakesLadders::getPos(int player)
{
    if(player == 1)
    {
        return p1_pos;
    }
    else if(player == 2)
    {
        return p2_pos;  
    }
    else
    {
        //meh
        return -1;
    }
}
void SnakesLadders::setPos(int player, int position)
{
    if(player == 1)
    {
        p1_pos = position;
    }
    else if(player == 2)
    {
        p2_pos = position;
    }
    else
    {
        //do nothing
    }
}

void SnakesLadders::movePlayer(int player, int roll)
{
    if(player == 1 || player == 2)
    {
        if(getPos(player) + roll > 100)
        {
            setPos(player, checkLanding(100 - (roll - (100-getPos(player)))));
        }
        else
        {
            setPos(player, checkLanding(getPos(player) + roll));
        }
    }
}

std::string SnakesLadders::outputPos(int player)
{
    std::stringstream ss;
    if(player == 1 || player == 2)
    {
        if(isPlaying)
        {
            if(getPos(player) == 100)
            {
                ss << "Player " << player << " Wins!";
                isPlaying = false;
            }
            else
            {
                ss << "Player " << player << " is on square " << getPos(player);
            }
        } 
        else
        {
            ss << "Game over!";
        }
    }
    return ss.str();
}

int SnakesLadders::checkLanding(int pos)
{
    return(board[pos]);
}
