/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let start = 0;
  let end = start + 1;
  let min = Infinity;
  let result = "";
  while (end < s.length + 1) {
    let tmp = s.slice(start, end);
    if (t.every((char) => tmp.includes(char))) {
      result = tmp.length < min ? tmp : result;
      start++
    } else {
      end++;
    }
  }
  return result
};
// @lc code=end
