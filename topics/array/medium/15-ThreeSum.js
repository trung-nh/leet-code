/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    let result = [];
    let length = nums.length;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < length - 2; i++) {
        // the smallest element of the triplet must be non-positive
        if (nums[i] > 0) return result;

        // skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1;
        let k = length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum < 0) j++;
            else if (sum > 0) k--;
            else {
                result.push([nums[i], nums[j++], nums[k--]]);
                while (nums[j] === nums[j - 1] && j < k) j++;
                while (nums[k] === nums[k + 1] && j < k) k--;
            }
        }

    }
    return result;
};

// expect: [[-10,5,5],[-5,0,5],[-4,2,2],[-3,-2,5],[-3,1,2],[-2,0,2]]
console.log(
    threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10]));
