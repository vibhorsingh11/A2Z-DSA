//Follow up: There might be more than one subarray with the maximum sum. We need to print any of them.

var maxSubArray = function (nums) {
  let sum = 0,
    maxSum = Number.MIN_SAFE_INTEGER;
  let start = 0;
  let ansStart = -1,
    ansEnd = -1;

  for (let i = 0; i < nums.length; i++) {
    //when sum 0 then start is reset to current
    if (sum == 0) start = i;

    sum += nums[i];

    if (sum > maxSum) {
      maxSum = sum;
      //max in initialized so, array start is start
      ansStart = start;
      ansEnd = i;
    }
    if (sum < 0) {
      sum = 0;
      start = i;
    }
  }
  console.log(nums.slice(ansStart, ansEnd + 1));
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
// [4,-1,2,1]

//TC: O(N) SC: O(1)
