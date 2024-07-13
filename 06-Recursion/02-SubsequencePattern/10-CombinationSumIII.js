/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let res = [];
  helper(res, k, n, 1, new Array());
  return res;
};

function helper(res, k, target, indx, curr) {
  if (curr.length === k && target === 0) {
    res.push([...curr]);
    return;
  }
  for (let i = indx; i <= 9; i++) {
    curr.push(i);
    helper(res, k, target - i, i + 1, curr);
    curr.pop();
  }
}

console.log(combinationSum3(3, 9)); //[[1,2,6],[1,3,5],[2,3,4]]

//TC: O(2^N (K)) K is the time to insert curr into res ds
//SC: O(2^N (K)) k is the avg. length of subset
