// https://www.codewars.com/kata/58223370aef9fc03fd000071

// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

export const dashatize = (num: number) => 
{
  let numStr = num.toString().split("");
  let retStr = "";
  console.log(numStr);

  if(numStr[0] == 'N')
    {
      return "NaN";
    }
  else
    {
      if(numStr[0] == "-")
        {
          numStr.shift();
        }
      if(numStr.length == 1)
        {
          return numStr[0].toString();
        }
      
      for(var i = 0; i < numStr.length; i++)
        {
          if(parseInt(numStr[i]) % 2 != 0)
            {
              if(i == 0)
                {
                  retStr += numStr[i] + "-";
                }
              else if(i == numStr.length - 1)
                {
                  if(retStr[retStr.length - 1] != "-")
                    {
                      retStr += "-" + numStr[i];
                    }
                  else
                    {
                      retStr += numStr[i];
                    }
                  
                }
              else
                {
                  if(retStr[retStr.length - 1] != "-")
                    {
                      retStr += "-" + numStr[i] + "-";
                    }
                  else
                    {
                      retStr += numStr[i] + "-";
                    }
                  
                }
              
            }
          else
            {
              retStr += numStr[i];
            }
        }
      
    }
  return retStr;
};
