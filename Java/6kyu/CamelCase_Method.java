// https://www.codewars.com/kata/587731fda577b3d1b0001196

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// camelCase("hello case"); // => "HelloCase"
// camelCase("camel case word"); // => "CamelCaseWord"

public class CamelCase_Method
{
    public static String camelCase(String str) 
    {
        String[] splt = str.split(" ");
        String output = "";
        for(int i = 0; i < splt.length; i++)
        {
            String[] sub = splt[i].split("");
            for(int j = 0; j < sub.length; j++)
            {
                if(j == 0)
                {
                    output = output + sub[j].toUpperCase();
                }
                else
                {
                    output = output + sub[j];  
                }
            }
        }
        return output;
    }
}
