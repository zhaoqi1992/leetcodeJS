/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

// 暴力解法
// 超出时间限制
var guessNumber_0 = function (n) {
  result = 1;
  while (result <= n) {
    if (guess(result) === 0) {
      return result;
    } else {
      result++;
    }
  }
};


// 二分查找
// 比数字大小，可以直接用 mid 判断
// 二分查找的灵魂：循环条件 left <= right
var guessNumber = function (n) {
  let left = 1,
    right = n;
  while (left <= right) {
    const mid = Math.floor((end + left) / 2);
    if (guess(mid) === 0) {
      return mid;
    }
    if (guess(mid) === -1) {
      right = mid - 1;
    }
    if (guess(mid) === 1) {
      left = mid + 1;
    }
  }
  return 0;
};
// @lc code=end
