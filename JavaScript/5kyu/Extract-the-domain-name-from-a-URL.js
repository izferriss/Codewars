// https://www.codewars.com/kata/514a024011ea4fb54200004b

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url)
{
    if(url.indexOf("http") != -1)
    {
        if(url.indexOf("www.") != -1)
        {
            return url.substring(url.indexOf("www.") + 4, url.indexOf(".", url.indexOf("www.") + 4));
        }
        else
        {
            return url.substring(url.indexOf("//") + 2, url.indexOf("."));
        }
    }
    else if(url.indexOf("www.") != -1)
    {
        return url.substring(url.indexOf("www.") + 4, url.indexOf(".", url.indexOf("www.") + 4));
    }
    else
    {
        return url.substring(0, url.indexOf("."));
    }
}