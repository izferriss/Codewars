// https://www.codewars.com/kata/534e01fbbb17187c7e0000c6

// Your task, is to create a NxN spiral with a given size.

// For example, spiral with size 5 should look like this:

// 00000
// ....0
// 000.0
// 0...0
// 00000
// and with the size 10:

// 0000000000
// .........0
// 00000000.0
// 0......0.0
// 0.0000.0.0
// 0.0..0.0.0
// 0.0....0.0
// 0.000000.0
// 0........0
// 0000000000
// Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:

// [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
// Because of the edge-cases for tiny spirals, the size will be at least 5.

// General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.

function spiralize(size)
{
    if(size == 0){return [];}
    else if(size == 1){return [[1]];}
    else if(size == 2){return [[1,1], [0,1]];}

    let arr = Array.from(Array(size), () => Array(size).fill(0));
    let i = 0;
    let j = 0;
    let dir = [0,1];

    let rotated = 0;

    while(rotated < 2)
    {
        arr[i][j] = 1;

        if(canMove(arr, i, j, dir))
        {
            i += dir[0];
            j += dir[1];
            rotated = 0;
        }
        else
        {
            let temp = dir[0];
            dir[0] = dir[1];
            dir[1] = -temp;
            rotated += 1;
        }
    }

    let temp = dir[0];
    dir[0] = -dir[1];
    dir[1] = temp;

    if(arr[i + dir[0]][j + dir[1]] == 1)
    {
        arr[i][j] = 0;
    }

    return arr;
}

function canMove(arr, i, j, dir)
{
    let len = arr.length;

    i += dir[0];
    j += dir[1];

    if(i < 0 || i >= len || j < 0 || j >= len)
    {
        return false;
    }

    if(arr[i][j] == 1)
    {
        return false;
    }

    i += dir[0];
    j += dir[1];

    if(i < 0 || i >= len || j < 0 || j >= len)
    {
        return true;
    }

    if(arr[i][j] == 1)
    {
        return false;
    }

    return true;
}