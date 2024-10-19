/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  return helper(nums, goal) - helper(nums, goal - 1);
};

//no of subarrays where sum <= goal
//no of subarrays where sum <= goal - 1
// these 2 will give us sum === goal
function helper(nums, goal) {
  const n = nums.length;
  let left = 0,
    right = 0,
    count = 0,
    sum = 0;
  if (goal < 0) return 0;

  while (right < n) {
    sum += nums[right];

    while (sum > goal) {
      sum -= nums[left];
      left++;
    }
    // Count the number of valid subarrays ending at right
    count += right - left + 1;
    right++;
  }
  return count;
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2)); //4

//TC: O(2 x 2N)
//SC: O(1)
