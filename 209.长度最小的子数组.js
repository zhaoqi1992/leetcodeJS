/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let min = Infinity;
  let start = 0;
  let end = start + 1;
  let sum = nums[0];
  function summary(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
  }
  while (end < nums.length+1) {
    if (sum >= target) {
      start++;
      min = Math.min(min, end - start + 1);
    } else {
      end++;
    }
    sum = summary(nums.slice(start, end));
  }

  return min === Infinity ? 0 : min;
};
console.log(minSubArrayLen(6, [10,2,3]));
// @lc code=end
