/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  helper(nums, nums.length, res, 0, new Array());
  return res;
};

function helper(arr, n, res, indx, curr) {
  res.push([...curr]);

  for (let i = indx; i < n; i++) {
    if (i !== indx && arr[i] === arr[i - 1]) continue;
    curr.push(arr[i]);
    helper(arr, n, res, i + 1, curr);
    curr.pop();
  }
}

console.log(subsetsWithDup([1, 2, 2]));
//[[],[1],[1,2],[1,2,2],[2],[2,2]]

//TC: O(2^Nlog(N)) if we sort the array
//SC: O(2^N)
