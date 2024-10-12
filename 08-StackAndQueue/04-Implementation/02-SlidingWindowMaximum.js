/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const n = nums.length;
  let res = [],
    dq = [];

  for (let i = 0; i < n; i++) {
    // Remove indices that are out of the current window
    //When we add new element we remove one so, anything = or under 2
    if (dq.length > 0 && dq[0] <= i - k) {
      dq.shift();
    }
    // Remove indices of all elements that are less than the current element
    while (dq.length > 0 && nums[dq[dq.length - 1]] <= nums[i]) {
      dq.pop();
    }
    dq.push(i);

    //first window starts at k-1
    if (i >= k - 1) {
      res.push(nums[dq[0]]);
    }
  }
  return res;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(maxSlidingWindow(nums, k));

//TC: O(2N)
//SC: O(k) + O(N-k)
