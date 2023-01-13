/* THIS IS CURRENTLY NOT SUBMITTED ON CODEWARS AS A VALID SOLUTION */
/* This is too slow */

// https://www.codewars.com/kata/574e890e296e412a0400149c

// Task
// A game I played when I was young: Draw 4 cards from playing cards, use + - * / and () to make the final results equal to 24.

// You will coding in function equalTo24. Function accept 4 parameters a b c d(4 numbers), value range is 1-100.

// The result is a string such as "2*2*2*3" ,(4+2)*(5-1); If it is not possible to calculate the 24, please return "It's not possible!"

// All four cards are to be used, only use three or two cards are incorrect; Use a card twice or more is incorrect too.

// You just need to return one correct solution, don't need to find out all the possibilities.

// The different between "challenge version" and "simple version":

// 1) a,b,c,d range:  In "challenge version" it is 1-100, 
//                    In "simple version" it is 1-13.
// 2) "challenge version" has 1000 random testcases,
//    "simple version" only has 20 random testcases.
// Some examples:
// equalTo24(1,2,3,4) //can return "(1+3)*(2+4)" or "1*2*3*4"
// equalTo24(2,3,4,5) //can return "(5+3-2)*4" or "(3+4+5)*2"
// equalTo24(3,4,5,6) //can return "(3-4+5)*6"
// equalTo24(1,1,1,1) //should return "It's not possible!"
// equalTo24(13,13,13,13) //should return "It's not possible!"

function equalTo24(a,b,c,d)
{    
    let abcd_perms =
    [
        [a,b,c,d],
        [b,a,c,d],
        [c,a,b,d],
        [a,c,b,d],
        [b,c,a,d],
        [c,b,a,d],
        [c,b,d,a],
        [b,c,d,a],
        [d,c,b,a],
        [c,d,b,a],
        [b,d,c,a],
        [d,b,c,a],
        [d,a,c,b],
        [a,d,c,b],
        [c,d,a,b],
        [d,c,a,b],
        [a,c,d,b],
        [c,a,d,b],
        [b,a,d,c],
        [a,b,d,c],
        [d,b,a,c],
        [b,d,a,c],
        [a,d,b,c],
        [d,a,b,c]
    ];
    let oper_perms =
    [
        ["+","+","+"],
        ["+","+","-"],
        ["+","+","*"],
        ["+","+","/"],
        ["+","-","+"],
        ["+","-","-"],
        ["+","-","*"],
        ["+","-","/"],
        ["+","*","+"],
        ["+","*","-"],
        ["+","*","*"],
        ["+","*","/"],
        ["+","/","+"],
        ["+","/","-"],
        ["+","/","*"],
        ["+","/","/"],
        ["-","+","+"],
        ["-","+","-"],
        ["-","+","*"],
        ["-","+","/"],
        ["-","-","+"],
        ["-","-","-"],
        ["-","-","*"],
        ["-","-","/"],
        ["-","*","+"],
        ["-","*","-"],
        ["-","*","*"],
        ["-","*","/"],
        ["-","/","+"],
        ["-","/","-"],
        ["-","/","*"],
        ["-","/","/"],
        ["*","+","+"],
        ["*","+","-"],
        ["*","+","*"],
        ["*","+","/"],
        ["*","-","+"],
        ["*","-","-"],
        ["*","-","*"],
        ["*","-","/"],
        ["*","*","+"],
        ["*","*","-"],
        ["*","*","*"],
        ["*","*","/"],
        ["*","/","+"],
        ["*","/","-"],
        ["*","/","*"],
        ["*","/","/"],
        ["/","+","+"],
        ["/","+","-"],
        ["/","+","*"],
        ["/","+","/"],
        ["/","-","+"],
        ["/","-","-"],
        ["/","-","*"],
        ["/","-","/"],
        ["/","*","+"],
        ["/","*","-"],
        ["/","*","*"],
        ["/","*","/"],
        ["/","/","+"],
        ["/","/","-"],
        ["/","/","*"],
        ["/","/","/"]
    ];
    for(var i = 0; i < abcd_perms.length; i++)
    {
        for(var j = 0; j < oper_perms.length; j++)
        {
            if(eval(`${abcd_perms[i][0]} ${oper_perms[j][0]} ${abcd_perms[i][1]} ${oper_perms[j][1]} ${abcd_perms[i][2]} ${oper_perms[j][1]} ${abcd_perms[i][3]}`) == 24){return `${abcd_perms[i][0]} ${oper_perms[j][0]} ${abcd_perms[i][1]} ${oper_perms[j][1]} ${abcd_perms[i][2]} ${oper_perms[j][1]} ${abcd_perms[i][3]}`.replace(/\s/gi, "");}
            if(eval(`(${abcd_perms[i][0]} ${oper_perms[j][0]} ${abcd_perms[i][1]}) ${oper_perms[j][1]} ${abcd_perms[i][2]} ${oper_perms[j][2]} ${abcd_perms[i][3]}`) == 24){return `(${abcd_perms[i][0]} ${oper_perms[j][0]} ${abcd_perms[i][1]}) ${oper_perms[j][1]} ${abcd_perms[i][2]} ${oper_perms[j][2]} ${abcd_perms[i][3]}`.replace(/\s/gi, "");}
            if(eval(`${abcd_perms[i][0]} ${oper_perms[j][0]} (${abcd_perms[i][1]} ${oper_perms[j][1]} ${abcd_perms[i][2]}) ${oper_perms[j][2]} ${abcd_perms[i][3]}`) == 24){return`${abcd_perms[i][0]} ${oper_perms[j][0]} (${abcd_perms[i][1]} ${oper_perms[j][1]} ${abcd_perms[i][2]}) ${oper_perms[j][2]} ${abcd_perms[i][3]}`.replace(/\s/gi, "");}
            if(eval(`${abcd_perms[i][0]} ${oper_perms[j][0]} ${abcd_perms[i][1]} ${oper_perms[j][1]} (${abcd_perms[i][2]} ${oper_perms[j][2]} ${abcd_perms[i][3]})`) == 24){return `${abcd_perms[i][0]} ${oper_perms[j][0]} ${abcd_perms[i][1]} ${oper_perms[j][1]} (${abcd_perms[i][2]} ${oper_perms[j][2]} ${abcd_perms[i][3]})`.replace(/\s/gi, "");}
            if(eval(`(${abcd_perms[i][0]} ${oper_perms[j][0]} ${abcd_perms[i][1]})${oper_perms[j][1]}(${abcd_perms[i][2]} ${oper_perms[j][2]} ${abcd_perms[i][3]})`) == 24){return `(${abcd_perms[i][0]} ${oper_perms[j][0]} ${abcd_perms[i][1]})${oper_perms[j][1]}(${abcd_perms[i][2]} ${oper_perms[j][2]} ${abcd_perms[i][3]})`.replace(/\s/gi, "");}
            if(eval(`(${abcd_perms[i][0]} ${oper_perms[j][0]} ${abcd_perms[i][1]} ${oper_perms[j][1]} ${abcd_perms[i][2]}) ${oper_perms[j][2]} ${abcd_perms[i][3]}`) == 24){return `(${abcd_perms[i][0]} ${oper_perms[j][0]} ${abcd_perms[i][1]} ${oper_perms[j][1]} ${abcd_perms[i][2]}) ${oper_perms[j][2]} ${abcd_perms[i][3]}`.replace(/\s/gi, "");}
            if(eval(`${abcd_perms[i][0]} ${oper_perms[j][0]} (${abcd_perms[i][1]} ${oper_perms[j][1]} ${abcd_perms[i][2]} ${oper_perms[j][2]} ${abcd_perms[i][3]})`) == 24){return `${abcd_perms[i][0]} ${oper_perms[j][0]} (${abcd_perms[i][1]} ${oper_perms[j][1]} ${abcd_perms[i][2]} ${oper_perms[j][2]} ${abcd_perms[i][3]})`.replace(/\s/gi, "");}
            if(eval(`((${abcd_perms[i][0]} ${oper_perms[j][0]} ${abcd_perms[i][1]}) ${oper_perms[j][1]} ${abcd_perms[i][2]}) ${oper_perms[j][2]} ${abcd_perms[i][3]}`) == 24){return `((${abcd_perms[i][0]} ${oper_perms[j][0]} ${abcd_perms[i][1]}) ${oper_perms[j][1]} ${abcd_perms[i][2]}) ${oper_perms[j][2]} ${abcd_perms[i][3]}`.replace(/\s/gi, "");}
            if(eval(`(${abcd_perms[i][0]} ${oper_perms[j][0]} (${abcd_perms[i][1]} ${oper_perms[j][1]} ${abcd_perms[i][2]})) ${oper_perms[j][2]} ${abcd_perms[i][3]}`) == 24){return `(${abcd_perms[i][0]} ${oper_perms[j][0]} (${abcd_perms[i][1]} ${oper_perms[j][1]} ${abcd_perms[i][2]})) ${oper_perms[j][2]} ${abcd_perms[i][3]}`.replace(/\s/gi, "");}
            if(eval(`${abcd_perms[i][0]} ${oper_perms[j][0]} (${abcd_perms[i][1]} ${oper_perms[j][1]} (${abcd_perms[i][2]} ${oper_perms[j][2]} ${abcd_perms[i][3]}))`) == 24){return `${abcd_perms[i][0]} ${oper_perms[j][0]} (${abcd_perms[i][1]} ${oper_perms[j][1]} (${abcd_perms[i][2]} ${oper_perms[j][2]} ${abcd_perms[i][3]}))`.replace(/\s/gi, "");}
            if(eval(`${abcd_perms[i][0]} ${oper_perms[j][0]} ((${abcd_perms[i][1]} ${oper_perms[j][1]} ${abcd_perms[i][2]}) ${oper_perms[j][2]} ${abcd_perms[i][3]})`) == 24){return `${abcd_perms[i][0]} ${oper_perms[j][0]} ((${abcd_perms[i][1]} ${oper_perms[j][1]} ${abcd_perms[i][2]}) ${oper_perms[j][2]} ${abcd_perms[i][3]})`.replace(/\s/gi, "");}
        }
    }
    return "It\'s not possible!";
}