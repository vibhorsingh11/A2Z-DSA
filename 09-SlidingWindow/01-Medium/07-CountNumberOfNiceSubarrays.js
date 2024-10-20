/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  return helper(nums, k) - helper(nums, k - 1);
};

function helper(nums, goal) {
  const n = nums.length;
  let left = 0,
    right = 0,
    count = 0,
    sum = 0;
  if (goal < 0) return 0;

  while (right < n) {
    sum += nums[right] % 2 !== 0 ? 1 : 0;

    while (sum > goal) {
      sum -= nums[left] % 2 !== 0 ? 1 : 0;
      left++;
    }
    count += right - left + 1;
    right++;
  }
  return count;
}

console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)); //16

//TC: O(2 x 2N)
//SC: O(1)
