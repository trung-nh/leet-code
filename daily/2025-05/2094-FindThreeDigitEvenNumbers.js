// You are given an integer array digits, where each element is a digit. The array may contain duplicates.
// You need to find all the unique integers that follow the given requirements:
// - The integer consists of the concatenation of three elements from digits in any arbitrary order.
// - The integer does not have leading zeros.
// - The integer is even.
// For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.
// Return a sorted array of the unique integers.

// Tags : #enumeration, #array
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const findEvenNumbers = function(digits) {
    let frequency = Array(10).fill(0);
    digits.forEach(digit => {
        frequency[digit]++;
    });
    let resultSet = new Set();

    // form numbers <jki>
    for (let i = 0; i < 10; i += 2) {
        if (frequency[i] > 0) {
            frequency[i]--;
            for (let j = 1; j < 10; j++) {
                if (frequency[j] > 0) {
                    frequency[j]--;
                    for (let k = 0; k < 10; k++) {
                        if (frequency[k] > 0) {
                            resultSet.add(j * 100 + k * 10 + i);
                        }
                    }
                    frequency[j]++;
                }
            }
            frequency[i]++;
        }
    }
    return Array.from(resultSet).sort();
};
console.log(findEvenNumbers([2, 1, 3, 0]));
console.log(findEvenNumbers([2, 2, 8, 8, 2]));
console.log(findEvenNumbers([3, 7, 5]));