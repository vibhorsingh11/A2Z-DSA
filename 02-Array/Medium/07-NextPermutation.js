/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let n = nums.length;

  let ind = -1; // break point
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      ind = i;
      break;
    }
  }

  // If break point does not exist:
  if (ind == -1) {
    // reverse the whole array:
    nums.reverse();
    return nums;
  }

  // Find the next greater element
  // and swap it with A[ind]:

  for (let i = n - 1; i > ind; i--) {
    if (nums[i] > nums[ind]) {
      [nums[i], nums[ind]] = [nums[ind], nums[i]];
      break;
    }
  }

  //reverse the right half:
  nums.splice(ind + 1, n - ind - 1, ...nums.slice(ind + 1).reverse());

  return nums;
};

console.log(nextPermutation([2, 1, 5, 4, 3, 0, 0])); // [2 3 0 0 1 4 5 ]

//TC: O(N) SC: O(1)
