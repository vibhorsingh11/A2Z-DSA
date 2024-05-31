/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const n = nums.length;
  let low = 0,
    mid = 0,
    high = n - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      let temp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = temp;
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      let temp = nums[high];
      nums[high] = nums[mid];
      nums[mid] = temp;
      high--;
    }
  }
};

console.log(sortColors([2, 0, 2, 1, 1, 0])); //[0,0,1,1,2,2]

//TC: O(N), SC: O(1)
