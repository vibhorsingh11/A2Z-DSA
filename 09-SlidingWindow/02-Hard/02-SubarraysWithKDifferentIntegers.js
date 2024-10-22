/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  return helper(nums, k) - helper(nums, k - 1);
};

function helper(nums, k) {
  const n = nums.length;
  let l = 0,
    r = 0,
    count = 0;
  let map = new Map();

  while (r < n) {
    map.set(nums[r], (map.get(nums[r]) || 0) + 1);
    while (map.size > k) {
      map.set(nums[l], (map.get(nums[l]) || 0) - 1);
      if (map.get(nums[l]) === 0) map.delete(nums[l]);
      l++;
    }
    count += r - l + 1;
    r++;
  }
  return count;
}

console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)); //3

//TC: O(2N) + O(256);
//SC: O(256) ~= O(1)
