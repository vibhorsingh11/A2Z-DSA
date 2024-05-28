/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // k is within the bounds of the array length
  k = k % nums.length;
  //reverse whole array
  reverseHelper(nums, 0, nums.length - 1);
  //reverse k elements
  reverseHelper(nums, 0, k - 1);
  //reverse remaining elements
  reverseHelper(nums, k, nums.length - 1);
};

function reverseHelper(nums, left, right) {
  while (left < right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); //[5,6,7,1,2,3,4]
