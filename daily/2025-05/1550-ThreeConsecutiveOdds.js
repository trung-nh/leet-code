// Given an integer array arr, return true if there are three consecutive odd numbers in the array.
// Otherwise, return false.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = function(arr) {
    let length = arr.length;
    if (length < 3) return false;
    for (let i = 0; i < length - 2; i++) {
        if (arr[i] % 2 === 0) continue;
        if (arr[i + 1] % 2 === 0) {
            i++;
            continue;
        }
        if (arr[i + 2] % 2 === 0) {
            i += 2;
            continue;
        }
        return true;
    }
    return false;
};

console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));