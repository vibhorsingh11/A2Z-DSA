/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let index = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[index];
      nums[index++] = temp;
    }
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12])); //[1,3,12,0,0]

//TC: O(n)
