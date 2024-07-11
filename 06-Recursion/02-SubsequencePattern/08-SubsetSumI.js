/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];

  helper(nums, res, 0, 0);
  return res;
};

function helper(nums, res, i, curr) {
  if (i >= nums.length) {
    res.push(curr);
    return;
  }
  curr += nums[i];
  helper(nums, res, i + 1, curr);
  curr -= nums[i];
  helper(nums, res, i + 1, curr);
}

console.log(subsets([1, 2, 3]));
// [
//   6, 3, 4, 1,
//   5, 2, 3, 0
// ]

//TC: O(2^Nlog(2^N)) if we sort the result else it will be
//O(2^N)

//SC: O(2^N)
