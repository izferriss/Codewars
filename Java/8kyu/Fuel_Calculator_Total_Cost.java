// https://www.codewars.com/kata/57b58827d2a31c57720012e8/java

// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!

// Note
// 1 Dollar = 100 Cents

class Kata
{
    public static double fuelPrice(int litres, double pricePerLitre)
    {
        double discount;

        if(litres >= 10)
        {
            discount = .25;
        }
        else if(litres >= 8)
        {
            discount = .20;
        }
        else if(litres >= 6)
        {
            discount = .15;
        }
        else if(litres >= 4)
        {
            discount = .10;
        }
        else if(litres >= 2)
        {
            discount = .05;
        }
        else
        {
            discount = 0;
        }

        return (pricePerLitre - discount) * litres;
    }
}