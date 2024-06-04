/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (arr, k) {
  const n = arr.length;
  let map = new Map();
  map.set(0, 1);
  let preSum = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    preSum += arr[i];
    let rem = preSum - k;

    if (map.has(rem)) {
      // count of subarrays to be removed from front
      count += map.get(rem);
    }

    //update count of prefix sum in map or else put it
    map.set(preSum, (map.get(preSum) || 0) + 1);
  }
  return count;
};

console.log(subarraySum([1, 1, 1], 2)); //2

//TC:O(N) SC: O(N)
