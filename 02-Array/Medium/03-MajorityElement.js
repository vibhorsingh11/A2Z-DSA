/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let ele = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      ele = nums[i];
      count++;
    } else if (ele === nums[i]) {
      count++;
    } else if (ele !== nums[i]) {
      count--;
    }
  }
  let tempCount = 0;
  for (let num of nums) {
    if (ele === num) {
      tempCount++;
    }
  }
  if (tempCount > nums.length / 2) {
    return ele;
  }
  return -1;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); //2

//TC: O(N), SC: O(1)
