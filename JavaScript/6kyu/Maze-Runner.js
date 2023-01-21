// https://www.codewars.com/kata/58663693b359c4a6560001d6

// Introduction
// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
// Task
// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// ..with the following key

//       0 = Safe place to walk
//       1 = Wall
//       2 = Start Point
//       3 = Finish Point
//   direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules
// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

// 2. The start and finish positions will change for the final tests.

// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

// 4. If you reach the end point before all your moves have gone, you should return Finish.

// 5. If you hit any walls or go outside the maze border, you should return Dead.

// 6. If you find yourself still in the maze after using all the moves, you should return Lost.
// Good luck, and stay safe!

function mazeRunner(maze, directions)
{
  let currPos = getStartPos(maze);
  let finishPos = getFinishPos(maze);

  for(var i = 0; i < directions.length; i++)
  {
    if(canMove(maze, currPos, directions[i]))
    {
        currPos = move(currPos, directions[i]);
    }
    else
    {
        return "Dead";
    }
    if(currPos[0] == finishPos[0] && currPos[1] == finishPos[1])
    {
        return "Finish";
    }
  }
  return "Lost";
}

function getStartPos(maze)
{
    let start = 2;
    return [maze.findIndex(row => row.includes(start)), maze[maze.findIndex(row => row.includes(start))].indexOf(start)];
}

function getFinishPos(maze)
{
    let finish = 3;
    return [maze.findIndex(row => row.includes(finish)), maze[maze.findIndex(row => row.includes(finish))].indexOf(finish)];
}

function canMove(maze, currPos, direction)
{
    let maze_height = maze.length;
    let maze_width = maze[0].length;
    let NORTH = [-1, 0];
    let EAST = [0, 1];
    let SOUTH = [1, 0];
    let WEST = [0, -1];
    let nextPos = [];

    switch(direction)
    {
        case "N":
            nextPos = [currPos[0] + NORTH[0], currPos[1] + NORTH[1]];
            if(nextPos[0] < 0 || nextPos[0] >= maze_height || nextPos[1] < 0 || nextPos[1] >= maze_width || maze[nextPos[0]][nextPos[1]] == 1)
            {
                return false;
            }
            else
            {
                return true;
            }
        case "E":
            nextPos = [currPos[0] + EAST[0], currPos[1] + EAST[1]];
            if(nextPos[0] < 0 || nextPos[0] >= maze_height || nextPos[1] < 0 || nextPos[1] >= maze_width || maze[nextPos[0]][nextPos[1]] == 1)
            {
                return false;
            }
            else
            {
                return true;
            }
        case "S":
            nextPos = [currPos[0] + SOUTH[0], currPos[1] + SOUTH[1]];
            if(nextPos[0] < 0 || nextPos[0] >= maze_height || nextPos[1] < 0 || nextPos[1] >= maze_width || maze[nextPos[0]][nextPos[1]] == 1)
            {
                return false;
            }
            else
            {
                return true;
            }
        case "W":
            nextPos = [currPos[0] + WEST[0], currPos[1] + WEST[1]];
            if(nextPos[0] < 0 || nextPos[0] >= maze_height || nextPos[1] < 0 || nextPos[1] >= maze_width || maze[nextPos[0]][nextPos[1]] == 1)
            {
                return false;
            }
            else
            {
                return true;
            }
    }
}

function move(currPos, direction)
{
    let NORTH = [-1, 0];
    let EAST = [0, 1];
    let SOUTH = [1, 0];
    let WEST = [0, -1];

    switch(direction)
    {
        case "N":
            return [currPos[0] + NORTH[0], currPos[1] + NORTH[1]];
        case "E":
            return [currPos[0] + EAST[0], currPos[1] + EAST[1]];
        case "S":
            return [currPos[0] + SOUTH[0], currPos[1] + SOUTH[1]];
        case "W":
            return [currPos[0] + WEST[0], currPos[1] + WEST[1]];
    }
}