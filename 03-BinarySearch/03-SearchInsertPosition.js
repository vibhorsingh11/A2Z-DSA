/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  let ans = nums.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] >= target) {
        ans = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return ans;
  }
  return ans;
};

console.log(searchInsert([1, 3, 5, 6], 5)); //2

//TC: O(logN), SC: O(1)
