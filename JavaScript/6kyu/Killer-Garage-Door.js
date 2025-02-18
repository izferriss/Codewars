// https://www.codewars.com/kata/58b1ae711fcffa34090000ea

// Situation
// You have been hired by a company making electric garage doors. Accidents with the present product line have resulted in numerous damaged cars, broken limbs and several killed pets. Your mission is to write a safer version of their controller software.

// Specification
// We always start with a closed door. The remote control has exactly one button, with the following behaviour.

// If the door is closed, a push starts opening the door, and vice-versa
// It takes 5 seconds for the door to open or close completely
// While the door is moving, one push pauses movement, another push resumes movement in the same direction
// In order to make the door safer, it has been equiped with resistance-based obstacle detection. When the door detects an obstacle, it must immediately reverse the direction of movement.

// Input
// A string where each character represents one second, with the following possible values.

// '.' No event
// 'P' Button has been pressed
// 'O' Obstacle has been detected (supersedes P)
// As an example, '..P....' means that nothing happens for two seconds, then the button is pressed, then no further events.

// Output
// A string where each character represents one second and indicates the position of the door (0 if fully closed and 5 fully open). The door starts moving immediately, hence its position changes at the same second as the event.

// Example
// ..P...O..... as input should yield 001234321000 as output

function door(events)
{
    let results = "";
    let currentState = 0;

    let isClosed = true;
    let isOpen = false;
    let isPaused = false;
    let isClosing = false;
    let isOpening = false;

    for(var i = 0; i < events.length; i++)
    {
        if(events[i] == "O")
        {
            if(isClosing)
            {
                isClosing = false;
                isOpening = true;
            }
            else
            {
                isOpening = false;
                isClosing = true;
            }
        }
        if(isClosed)
        {
            if(events[i] == ".")
            {
                results += currentState.toString();
            }
            else if(events[i] == "P")
            {
                isClosed = false;
                isOpening = true;
                if(currentState < 5)
                {
                    currentState++;
                }
                results += currentState.toString();
            }
        }
        else if(isOpen)
        {
            if(events[i] == ".")
            {
                results += currentState.toString();
            }
            else if(events[i] == "P")
            {
                isOpen = false;
                isClosing = true;
                if(currentState > 0)
                {
                    currentState--;
                }
                results += currentState.toString();
            }
        }
        else if(isPaused)
        {
            if(events[i] == ".")
            {
                results += currentState.toString();
            }
            else if(events[i] == "P")
            {
                if(isClosing)
                {
                    isPaused = false;
                    if(currentState > 0)
                    {
                        currentState--;
                    }
                    else
                    {
                        isClosing = false;
                        isClosed = true;
                    }
                    results += currentState.toString();
                }
                else if(isOpening)
                {
                    isPaused = false;

                    if(currentState < 5)
                    {
                        currentState++;
                    }
                    else
                    {
                        isOpening = false;
                        isOpen = true;
                    }
                    results += currentState.toString();
                }
            }
        }
        else if(isOpening)
        {
            if(events[i] == "." || events[i] == "O")
            {
                if(currentState < 5)
                {
                    currentState++;
                }
                else
                {
                    isOpening = false;
                    isOpen = true;
                }
                results += currentState.toString();
            }
            else if(events[i] == "P")
            {
                isPaused = true;
                results += currentState.toString();
            }
        }
        else if(isClosing)
        {
            if(events[i] == "." || events[i] == "O")
            {
                if(currentState > 0)
                {
                    currentState--;
                }
                else
                {
                    isClosing = false;
                    isClosed = true;
                }
                results += currentState.toString();
            }
            else if(events[i] == "P")
            {
                isPaused = true;
                results += currentState.toString();
            }
        }
    }
    return results;
}