/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxOnes = 0,
    max = 0;
  for (let num of nums) {
    if (num === 1) {
      max++;
      maxOnes = Math.max(maxOnes, max);
    } else {
      max = 0;
    }
  }
  return maxOnes;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); //3

//TC O(n)
