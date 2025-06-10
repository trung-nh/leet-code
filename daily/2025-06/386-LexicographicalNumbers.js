/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function(n) {
	let currentNumber = 1;
	let result = [];
	while (result.length < n) {
		result.push(currentNumber);

		if (currentNumber * 10 <= n) {
			currentNumber *= 10;
		} else {
			while (currentNumber % 10 === 9 || currentNumber >= n) {
				currentNumber = Math.floor(currentNumber / 10);
			}
			currentNumber++;
		}
	}
	return result;
};