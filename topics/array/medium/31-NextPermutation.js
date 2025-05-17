// #array
// #two-pointers

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {
    let length = nums.length;
    if (length < 2) return;

    let turningPoint = length - 2;
    while (turningPoint >= 0
    && nums[turningPoint] >= nums[turningPoint + 1]) {
        if (nums[turningPoint] < nums[turningPoint + 1] || turningPoint === 0) {
            break;
        }
        turningPoint--;
    }
    if (turningPoint === 0 && nums[0] >= nums[1]) {
        nums.reverse();
        return;
    }
    let left = turningPoint + 1;
    if (nums[length - 1] > nums[turningPoint]) {
        left = length - 1;
    } else {
        let right = length - 1;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] > nums[turningPoint] && nums[mid + 1] <=
                nums[turningPoint]) {
                left = mid;
                break;
            }
            if (nums[mid] <= nums[turningPoint]) {
                right = mid - 1;
            } else {
                left = mid;
            }
        }
    }
    [nums[turningPoint], nums[left]] = [nums[left], nums[turningPoint]];
    let tail = nums.splice(turningPoint + 1);
    nums.push(...tail.reverse());
};