/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    while (mid <= high) {
        switch (nums[mid]) {
            case 0:
                [nums[low], nums[mid]] = [nums[mid], nums[low]];
                low++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                [nums[high], nums[mid]] = [nums[mid], nums[high]];
                high--;
                break;
            default:
                break;
        }
    }
};