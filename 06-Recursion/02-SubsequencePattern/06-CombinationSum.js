/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  helper(candidates, target, res, 0, new Array());
  return res;
};

function helper(arr, target, res, i, curr) {
  if (i === arr.length) {
    if (target === 0) {
      res.push([...curr]);
    }
    return;
  }
  if (arr[i] <= target) {
    curr.push(arr[i]);
    helper(arr, target - arr[i], res, i, curr);
    curr.pop();
  }
  helper(arr, target, res, i + 1, curr);
}

console.log(combinationSum([2, 3, 6, 7], 7)); //[[2,2,3],[7]]

//TC: O(2^N * N)  ,adding curr to res is N
//SC: O(N*K) ,N is the ave.length, K is the combination
