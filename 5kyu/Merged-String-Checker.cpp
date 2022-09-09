// https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa

// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

// The restriction is that the characters in part1 and part2 should be in the same order as in s.

// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

// For example:

// 'codewars' is a merge from 'cdw' and 'oears':

//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears

#include <string>

bool is_merge(const std::string& s, const std::string& part1,
              const std::string& part2) 
{
    if (s == "")
    {
        return part1 == "" && part2 == ""; 
    } 
    else
    {
        bool mergeString1 = false;
        bool mergeString2 = false;
        
        if (part1.length() > 0 && s[0] == part1[0])
        {
            mergeString1 = is_merge(s.substr(1), part1.substr(1), part2);
        }
        if (part2.length() > 0 && s[0] == part2[0])
        {
            mergeString2 = is_merge(s.substr(1), part1, part2.substr(1));
        }
        return mergeString1 || mergeString2;
    }
}
