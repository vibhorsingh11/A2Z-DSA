/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const n = nums.length;
  let prefix = 1,
    sufix = 1;
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < n; i++) {
    //If found zero
    if (prefix === 0) prefix = 1;
    if (sufix === 0) sufix = 1;

    prefix *= nums[i];
    //from back
    sufix *= nums[n - i - 1];

    max = Math.max(max, Math.max(prefix, sufix));
  }
  return max;
};

console.log(maxProduct([2, 3, -2, 4])); //6

//TC: O(N) SC: O(1)
