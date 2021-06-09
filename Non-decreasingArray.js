//https://leetcode-cn.com/problems/non-decreasing-array/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function min(nums) {
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
      if(nums[i]<min){
          min = nums[i]
      }
  }
  return min;
}
var checkPossibility = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let tmp = nums[i];
    nums[i]=0
    if (min(nums) !== 0) {
      return false;
    }else{
        nums[i] = tmp
    }
  }
  return true
};

if (require.main === module) {
  const nums = [4, 2, 1];
  console.log(checkPossibility(nums));
}
