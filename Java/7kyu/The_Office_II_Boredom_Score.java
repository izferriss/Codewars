// https://www.codewars.com/kata/57ed4cef7b45ef8774000014/java

// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an array of Person objects with each instance containing the name and department for a staff member.

// public class Person {
//   public final String name;        // name of the staff member
//   public final String department;  // department they work in
// }
// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

class TheOffice
{
    public static String boredom(Person[] staff)
    {
        int sum = 0;
        for(Person p : staff)
        {
            if(p.department == "accounts")
            {
                sum += 1;
            }
            else if(p.department == "finance")
            {
                sum += 2;
            }
            else if(p.department == "canteen")
            {
                sum += 10;
            }
            else if(p.department == "regulation")
            {
                sum += 3;
            }
            else if(p.department == "trading" || p.department == "change")
            {
                sum += 6;
            }
            else if(p.department == "IS")
            {
                sum += 8;
            }
            else if(p.department == "retail")
            {
                sum += 5;
            }
            else if(p.department == "cleaning")
            {
                sum += 4;
            }
            else if(p.department == "pissing about")
            {
                sum += 25;
            }
            else
            {
                sum += 0;
            }
        }
        return sum >= 100 ? "party time!!" : (sum > 80 &&  sum < 100) ? "i can handle this" : "kill me now";
    }
}