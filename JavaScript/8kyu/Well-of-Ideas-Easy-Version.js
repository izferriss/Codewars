// https://www.codewars.com/kata/57f222ce69e09c3630000212/

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x)
{
    let good = [];
    let bad = [];
    for(var i = 0; i < x.length; i++)
    {
        if(x[i] == 'good'){good.push('good');}
        else{bad.push('bad')};
    }

    return good.length == 0 ? "Fail!" : good.length > 2 ? "I smell a series!" : "Publish!";
}