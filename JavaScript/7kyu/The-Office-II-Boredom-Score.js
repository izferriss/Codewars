// https://www.codewars.com/kata/the-office-ii-boredom-score

// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

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

function boredom(staff) {
	let sum = 0;
	Object.entries(staff).forEach(([key, value]) => {
		switch (value) {
			case "accounts":
				sum += 1;
				break;
			case "finance":
				sum += 2;
				break;
            case "canteen":
                sum += 10;
                break;
            case "regulation":
                sum += 3;
                break;
            case "trading":
            case "change":
                sum += 6;
                break;
            case "IS":
                sum += 8;
                break;
            case "retail":
                sum += 5;
                break;
            case "cleaning":
                sum += 4;
                break;
            case "pissing about":
                sum += 25;
                break;
            default:
                sum += 0;
		}
	});

    return sum <= 80 ? "kill me now" : sum > 80 && sum < 100 ? "i can handle this" : "party time!!";
}