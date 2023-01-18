// https://www.codewars.com/kata/565b3542af398bfb50000003

// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3

function strCount(obj)
{
    let count = 0;
    for(var i in obj)
    {
        if(typeof obj[i] == 'object') count += strCount(obj[i]);
        if(typeof obj[i] == 'string') count += 1
    }

    return count;
}