/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let sum = target - nums[i];
    if (map.has(sum)) {
      return new Array(map.get(sum), i);
    } else {
      map.set(nums[i], i);
    }
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9)); //[0,1]

//TC: O(N), SC: O(N)
