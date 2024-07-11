/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates.sort((a, b) => a - b);
  helper(candidates, target, res, 0, new Array());
  return res;
};

function helper(arr, target, res, indx, curr) {
  if (target === 0) {
    res.push([...curr]);
    return;
  }

  for (let i = indx; i < arr.length; i++) {
    if (i > indx && arr[i] === arr[i - 1]) continue;
    if (arr[i] > target) break;
    curr.push(arr[i]);
    helper(arr, target - arr[i], res, i + 1, curr);
    curr.pop();
  }
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// [
//   [1, 1, 6],
//   [1, 2, 5],
//   [1, 7],
//   [2, 6],
// ];

//TC: O(2^N * K)  ,“k”//average space for the ds
//SC: O(K * X)  , x combinations then space will be x*k where k is the average length of the combination
