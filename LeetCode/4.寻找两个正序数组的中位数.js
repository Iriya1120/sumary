/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [...nums1, ...nums2]
    nums.sort((o1,o2) => o1-o2)
    let len = nums.length
    if (len % 2 == 0){
        let left = len / 2 - 1
        let right = left + 1
        return (nums[left] + nums[right]) / 2
    }else {
        return nums[Math.ceil(len / 2) - 1]
    }
};
// @lc code=end

