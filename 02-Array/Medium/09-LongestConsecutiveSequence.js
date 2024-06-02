/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const n = nums.length;
  if (n < 1) {
    return 0;
  }
  let set = new Set(nums);
  let max = 1;

  for (let i = 0; i < n; i++) {
    //found starting number
    if (!set.has(nums[i] - 1)) {
      let startNum = nums[i];
      let count = 1;
      //loop for next consecutive numbers
      while (set.has(startNum + 1)) {
        count++;
        startNum++;
      }
      max = Math.max(max, count);
    }
  }
  return max;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); //9

//TC: O(N) + O(2N), SC: O(N)
