/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  //maintaining ranges
  let jumps = 0,
    l = 0,
    r = 0;
  const n = nums.length;

  //if index is at n-1 and beyond we stop
  while (r < n - 1) {
    let farthest = 0;
    for (let i = l; i <= r; i++) {
      farthest = Math.max(farthest, i + nums[i]);
    }
    l = r + 1;
    r = farthest;
    jumps++;
  }
  return jumps;
};

//TC: O(N)
//SC: O(1)
