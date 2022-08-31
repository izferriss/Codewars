// https://www.codewars.com/kata/52597aa56021e91c93000cb0

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) 
{
    const temparr = [];
    const zeroarr = [];
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] === 0)
        {
            zeroarr.push(arr[i]);
        }
        else
        {
            temparr.push(arr[i]);
        }
    }
    for(var j = 0; j < zeroarr.length; j++)
    {
        temparr.push(zeroarr[j]);
    }
  
    return temparr;
}