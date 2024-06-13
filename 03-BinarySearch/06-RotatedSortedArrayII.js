/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return true;
    }
    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      left++;
      right--;
      continue;
    }
    //left is sorted
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && nums[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      //right is sorted
      if (target <= nums[right] && nums[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};

console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); // true

//TC: O(logN), SC: O(1)
