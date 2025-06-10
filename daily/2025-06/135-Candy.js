/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = function(ratings) {
	let length = ratings.length;
	let candies = Array(length).fill(1);
	let result = 0;

	// checking whether a child's rating is higher than its LEFT NEIGHBOR
	for (let i = 1; i < length; i++) {
		if (ratings[i] > ratings[i - 1]) {
			candies[i] = candies[i - 1] + 1;
		}
	}

	// checking whether a child's rating is higher than its RIGHT NEIGHBOR
	for (let i = length - 1; i > 0; i--) {
		if (ratings[i - 1] > ratings[i]) {
			candies[i - 1] = Math.max(candies[i - 1], candies[i] + 1);
		}
		result += candies[i - 1];
	}

	return result + candies[length - 1];
};