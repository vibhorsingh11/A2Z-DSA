//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is
//missing from the array.
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  let res = (n * (n + 1)) / 2;
  let sum = 0;
  for (let num of nums) sum += num;
  return res - sum;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); //8

//TC O(n)
