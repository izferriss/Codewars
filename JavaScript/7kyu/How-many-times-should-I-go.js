// https://www.codewars.com/kata/57efcb78e77282f4790003d8/javascript

// Lot of museum allow you to be a member, for a certain amount amount_by_year you can have unlimitted acces to the museum.

// In this kata you should complete a function in order to know after how many visit it will be better to take an annual pass. The function take 2 arguments annual_price and individual_price.

function howManyTimes(annualPrice, individualPrice) {
	let count = 0;
	if (individualPrice === 0) {
		return Infinity;
	}
	while (annualPrice > 0) {
		annualPrice -= individualPrice;
		count++;
	}

	return count;
}