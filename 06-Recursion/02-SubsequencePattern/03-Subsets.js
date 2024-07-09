/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];

  helper(nums, res, 0, new Array());
  return res;
};

function helper(nums, res, i, curr) {
  if (i >= nums.length) {
    res.push([...curr]);
    return;
  }
  curr.push(nums[i]);
  helper(nums, res, i + 1, curr);
  curr.pop();
  helper(nums, res, i + 1, curr);
}

console.log(subsets([1, 2, 3]));
//[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

//TC: O(2^N)
//SC: O(N)
