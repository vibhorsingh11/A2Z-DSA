/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;
  let min = Infinity;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[left] <= nums[right]) {
      min = Math.min(min, nums[left]);
      break;
    }

    if (nums[left] <= nums[mid]) {
      min = Math.min(min, nums[left]);
      left = mid + 1;
    } else {
      min = Math.min(min, nums[mid]);
      right = mid - 1;
    }
  }
  return min;
};

console.log(findMin([3, 4, 5, 1, 2])); //1

//TC: O(logN), SC: O(1)
