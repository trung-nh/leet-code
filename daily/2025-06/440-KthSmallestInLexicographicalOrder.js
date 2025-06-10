/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findKthNumber = function(n, k) {
	let curNumberOrder = 1;
	let curNumber = 1;
	while (curNumberOrder < k) {
		curNumberOrder++;
		if (curNumber * 10 <= n) curNumber *= 10;
		else {
			while (curNumber % 10 === 9 || curNumber >= n) {
				curNumber = Math.floor(curNumber / 10);
			}
			curNumber++;
		}
	}
	return curNumber;
};