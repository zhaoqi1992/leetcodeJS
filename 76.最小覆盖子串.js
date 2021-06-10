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

// result：
// 136/266 cases passed (N/A)
// minWindow('aa', 'aa') == 'aa' 当前输出 'a'
var minWindow_0 = function (s, t) {
  let start = 0
  // [start, end] 长度至少等于 t 的长度
  let end = start + t.length
  let result = ""
  let min = Infinity
  while (end < s.length + 1) {
    let subStr = s.slice(start, end)
    if (t.split('').every(char => subStr.includes(char))) {
      result = subStr.length < min ? subStr : result
      min = Math.min(min, subStr.length)
      start++
    } else {
      end++
    }
  }
  return result

};

// 264/266 cases passed (N/A)
// 内存溢出
var minWindow_1 = function (s, t) {
  let start = 0
  // [start, end] 长度至少等于 t 的长度
  let end = start + t.length
  let result = ""
  let min = Infinity
  while (end < s.length + 1) {
    let subStr = s.slice(start, end)
    let tmpStr = subStr
    // 如果包含 char ，删除该 char
    if (t.split('').every(char => {
      if (tmpStr.includes(char)) {
        tmpStr = tmpStr.replace(char, '')
        return true
      } else {
        return false
      }
    })) {
      result = subStr.length < min ? subStr : result
      min = Math.min(min, subStr.length)
      start++
    } else {
      end++
    }
  }
  return result
};

// 优化验证滑窗是否满足要求, 改 string ——> hash map
// 264/266 cases passed
// 内存溢出，复杂度 O(n^2)
var minWindow_2 = function (s, t) {
  let start = 0
  // [start, end] 长度至少等于 t 的长度
  let end = start + t.length
  let result = ""
  let min = Infinity
  let tObj = t.split('').reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur)) {
      acc[cur] += 1
    } else {
      acc[cur] = 1
    }
    return acc
  }, {})
  while (end < s.length + 1) {
    const subStr = s.slice(start, end)
    const subObj = subStr.split('').reduce((acc, cur) => {
      if (acc.hasOwnProperty(cur)) {
        acc[cur] += 1
      } else {
        acc[cur] = 1
      }
      return acc
    }, {})
    // 如果包含 char ，删除该 char
    if (Object.keys(tObj).every(char => subObj[char] >= tObj[char])) {
      result = subStr.length < min ? subStr : result
      min = Math.min(min, subStr.length)
      start++
    } else {
      end++
    }
  }
  return result
};


// 来自最高票答案
// hash 表来判断是否满足要求
// t=ABC, map={A:1, B:1, C:1}, count=3：滑窗中找到一个 A, map[A]--；找到所有 A, count--
// 符合要求的子串：count==0
var minWindow = function (s, t) {
  // setting this to -1 ensures that we will check the first char on the first time
  let min = "", left = 0, right = -1;
  let map = {};

  // t 字串转 hash
  t.split('').forEach(element => {
    if (map[element] == null) map[element] = 1;
    else map[element] = map[element] + 1;
  });

  // 找出 t 中不同的 key 的总数
  let count = Object.keys(map).length;

  while (right <= s.length) {
    // count === 0 表明当前子串符合要求
    if (count == 0) {
      let current = s[left];

      // 如果 s[left] 不是 null，说明 s[left] t 中的内容
      // map[current]++ 因为 left++ 后，current 就不在子串中了, 但满足要求的子串必须包含 current
      if (map[current] != null) map[current]++;
      if (map[current] > 0) count++;

      let temp = s.substring(left, right + 1)
      if (min == "") min = temp;
      else min = min.length < temp.length ? min : temp;
      left++;
    } else {
      right++;
      let current = s[right];

      // map[current] != null 表示 current 是 t 中要考虑的字符
      if (map[current] != null) map[current]--;
      // map[current] == 0 表示 t 中的 current 全部找到
      // count-- 表示需要找的 char 的种类减一
      if (map[current] == 0) count--;
    }
  }
  return min;
}


console.log(minWindow("ADOBECODEBAANC", "AABC"))
// @lc code=end

