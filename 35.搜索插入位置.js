/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 全部遍历
var searchInsert_0 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

// 二分法
// 二分法不一定要递归
// 只要看到面试题里给出的数组是有序数组，都可以想一想是否可以使用二分法
var searchInsert_1 = function (nums, target) {
  let start = 0;
  // 如果要向数组最后插入，end===nums.length，target位置最终为 nums.length+1
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  // mid, start, end 全部相同的時候，再比一次
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      start = mid + 1;
    }
    if (nums[mid] > target) {
      end = mid - 1;
    }
  }
  // 返回 start：
  // 1. start 變動導致退出循環，說明start、end、mid 重合時，mid < target，此時 start==end+1 所以target應該排在右邊
  // 2. end 變動導致退出循環，說明start、end、mid 重合時，mid > target，此時 end = start-1 所以target應該排在左邊
  return start;
};

// 二分法
// 递归方式：想保留原数组索引，每次递归时传入原数组，改变索引
function binarySearch(arr, target, left, right) {
  if (left > right) return left;
  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;

  if (arr[mid] < target) return binarySearch(arr, target, left, mid + 1);
  if (arr[mid] > target) return binarySearch(arr, target, mid - 1, right);
}
var searchInsert = function (nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};

// @lc code=end

console.log(searchInsert([1, 3, 5], 6));
