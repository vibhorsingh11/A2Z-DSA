/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let arr = new Array(nums.length);
  let pos = 0,
    neg = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      arr[pos] = nums[i];
      pos += 2;
    } else {
      arr[neg] = nums[i];
      neg += 2;
    }
  }
  return arr;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4])); //[3,-2,1,-5,2,-4]

//TC: O(N) SC: O(N)
