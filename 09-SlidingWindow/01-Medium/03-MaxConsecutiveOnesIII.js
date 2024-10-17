/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  const n = nums.length;
  let l = 0,
    r = 0,
    maxLen = 0,
    zeros = 0;

  while (r < n) {
    if (nums[r] === 0) {
      zeros++;
    }
    if (zeros > k) {
      if (nums[l] === 0) zeros--;
      l++;
    }
    if (zeros <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }
    r++;
  }
  return maxLen;
};

console.l(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 2)
); //10

//TC: O(N)
//SC: O(1)
