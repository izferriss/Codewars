// https://www.codewars.com/kata/634d0f7c562caa0016debac5

// Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

// CONDITIONS

// Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array.
// EXAMPLES

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
// //0 survivors                4 survivors
// //return true


// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
// //2 survivors  (16 damage)   2 survivors (6 damage)
// //return false

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]  
// //1 survivors                3 survivors 
// //return true

function hasSurvived(attackers, defenders)
{
    let lenA = attackers.length;
    let lenD = defenders.length;

    console.log("attackers\n" + attackers);
    console.log("defenders\n" + defenders);
    if(lenA >= lenD)
    {
        //iterate through smaller array
        for(var i = 0; i < defenders.length; i++)
        {
            if(attackers[i] == defenders[i])
            {
                lenA--;
                lenD--;
            }
            else if(attackers[i] > defenders[i])
            {
                lenD--;
            }
            else
            {
                lenA--;
            }
        }
        if(lenA > lenD)
        {
            console.log("lenA >= lenD | lenA > lenD | false");
            return false;
        }
        else if(lenD > lenA)
        {
            console.log("lenA >= lenD | lenD > lenA | true");
            return true;
        }
        else
        {
            let sumA = attackers.reduce((accumulator, index) => accumulator + index, 0);
            let sumD = defenders.reduce((accumulator, index) => accumulator + index, 0);
            if(sumA > sumD)
            {
                console.log("lenA >= lenD | lenA = lenD | false");
                return false;
            }
            else
            {
                console.log("lenA >= lenD | lenA = lenD | true");
                return true;
            }
        }
    }
    else
    {
        //iterate through smaller array
        for(var i = 0; i < attackers.length; i++)
        {
            if(attackers[i] == defenders[i])
            {
                lenA--;
                lenD--;
            }
            else if(attackers[i] > defenders[i])
            {
                lenD--;
            }
            else
            {
                lenA--;
            }
        }
        if(lenA > lenD)
        {
            console.log("lenA < lenD | lenA > lenD | false");
            return false;
        }
        else if(lenD > lenA)
        {
            console.log("lenA < lenD | lenD > lenA | true");
            return true;
        }
        else
        {
            let sumA = attackers.reduce((accumulator, index) => accumulator + index, 0);
            let sumD = defenders.reduce((accumulator, index) => accumulator + index, 0);
            if(sumA > sumD)
            {
                console.log("lenA < lenD | lenA = lenD | false");
                return false;
            }
            else
            {
                console.log("lenA < lenD | lenA = lenD | true");
                return true;
            }
        }
    }
}