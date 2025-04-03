// https://www.codewars.com/kata/56af1a20509ce5b9b000001e/train/javascript

// To ease his travel he wants to group the list by zipcode.

// Task
// The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode and returns a string in the following format:

// zipcode:street and town,street and town,.../house number,house number,...

// The street numbers must be in the same order as the streets where they belong.

// If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

// Examples
// r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

// travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

// travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

// travel(r, "NY 5643") --> "NY 5643:/"
// Note for Elixir:
// In Elixir the empty addresses' input is an empty list, not an empty string.

// Note:
// You can see a few addresses and zipcodes in the test cases.

function travel(r, zipcode) {
  let addys = r.split(",");
  if (!zipcode) {
    return ":/";
  }
  if (r.indexOf(zipcode) == -1 || zipcode.length < 8) {
    return zipcode + ":/";
  }

  let res = zipcode + ":";
  let streets = [];
  let nums = [];

  for (let i = 0; i < addys.length; i++) {
    if (addys[i].includes(zipcode)) {
      streets.push(
        addys[i].substring(
          addys[i].indexOf(" ") + 1,
          addys[i].indexOf(zipcode) - 1
        )
      );
      nums.push(addys[i].substring(0, addys[i].indexOf(" ")));
    }
  }

  for (s in streets) {
    res += streets[s] + ",";
  }

  res = res.substring(0, res.length - 1) + "/";

  for (n in nums) {
    res += nums[n] + ",";
  }

  return res.substring(0, res.length - 1);
}