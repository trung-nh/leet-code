// You are given two arrays nums1 and nums2 consisting of positive integers.
// You have to replace all the 0's in both arrays with strictly positive integers such that
// the sum of elements of both arrays becomes equal.
// Return the minimum equal sum you can obtain, or -1 if it is impossible.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    let sum1 = 0, sum2 = 0;
    let zeroCount1 = 0, zeroCount2 = 0;

    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] === 0) {
            sum1++;
            zeroCount1++;
        } else sum1 += nums1[i];
    }
    for (let i = 0; i < nums2.length; i++) {
        if (nums2[i] === 0) {
            sum2++;
            zeroCount2++;
        } else sum2 += nums2[i];
    }
    if ((zeroCount1 === 0 && sum1 < sum2) ||
        (zeroCount2 === 0 && sum1 > sum2)) return -1;

    return Math.max(sum1, sum2);
};

console.log(minSum([1, 0], [2, 0, 0]));