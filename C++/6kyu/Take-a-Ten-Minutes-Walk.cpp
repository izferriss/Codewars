// https://www.codewars.com/kata/54da539698b8a2ad76000228

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


#include<vector>

bool isValidWalk(std::vector<char> walk)
{
    int size = (int)walk.size();

    if(size != 10)
    {
        return false;
    }
    else
    {
        std::vector<int> start = {0,0};

        for(int i = 0; i < size; i++)
        {
            switch(walk[i])
            {
                case 'n':
                    start[1]++;
                    break;
                case 's':
                    start[1]--;
                    break;
                case 'w':
                    start[0]--;
                    break;
                case 'e':
                    start[0]++;
                    break;
            } 
        }
        if(start[0] != 0 || start[1] != 0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
}