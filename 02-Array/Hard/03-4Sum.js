/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;

      let k = j + 1;
      let l = n - 1;
      while (k < l) {
        let sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[k], nums[l]]);
          k++;
          l--;
          while (k < l && nums[k] === nums[k - 1]) k++;
          while (k < l && nums[l] === nums[l + 1]) l--;
        } else if (sum < target) {
          k++;
        } else {
          l--;
        }
      }
    }
  }
  return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); //[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

//TC: O(Nx3), SC: O(1) no of quadruplets
