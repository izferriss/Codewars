// https://www.codewars.com/kata/515f51d438015969f7000013

// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s



List<List<int>> pyramid(int n)
{
    var count = 1;
    final List<List<int>> ret = [];
    if(n == 0)
    {
        return ret;
    }
    while(count <= n)
    {
        List<int> temp = [];

        for(var i = 0; i < count; i++)
        {
            temp.add(1);
        }
        ret.add(temp);    
        count++;
    }

    return ret;
}