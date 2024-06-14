/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const n = nums.length;

  if (n === 1) return 0;
  if (nums[0] > nums[1]) return 0;
  if (nums[n - 2] < nums[n - 1]) return n - 1;

  let left = 1,
    right = n - 2;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    } else if (nums[mid] > nums[mid - 1]) {
      //if left is increasing
      left = mid + 1;
    } else {
      //if right is increasing
      right = mid - 1;
    }
  }
  return -1;
};

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); //5

//TC: O(logN), SC: O(1)
