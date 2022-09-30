// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

#include <string>
#include <vector>
#include <iostream>

std::vector<std::string> towerBuilder(unsigned nFloors)
{
    int currFloor = 1;
    int maxFloorSize = (nFloors * 2) - 1;
    int frontPad = 0;

    std::vector<std::string> ret;

    while(currFloor <= nFloors)
    {
        std::string floor = "";

        int floorSize = (currFloor * 2) - 1;
        frontPad = (maxFloorSize - floorSize) / 2;

        for(int i = 0; i < maxFloorSize; i++)
        {
            if(frontPad > 0)
            {
                std::cout << frontPad << std::endl;
                floor.push_back(' ');
                frontPad--;
            }
            else if(floorSize > 0)
            {
                floor.push_back('*');
                floorSize--;
            }
            else
            {
                floor.push_back(' ');
            }
        }
        ret.push_back(floor);
        currFloor++;
    }

    return ret;
}