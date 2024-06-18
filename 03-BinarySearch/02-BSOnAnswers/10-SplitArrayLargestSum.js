/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  let left = Math.max(...nums),
    right = nums.reduce((acc, ele) => acc + ele, 0);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (subarrays(nums, mid) <= k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

function subarrays(arr, mid) {
  let n = arr.length;
  let prevSum = 0;
  let countSubarr = 1;

  for (let i = 0; i < n; i++) {
    if (arr[i] + prevSum <= mid) {
      prevSum += arr[i];
    } else {
      countSubarr++;
      prevSum = arr[i];
    }
  }
  return countSubarr;
}

console.log(splitArray([7, 2, 5, 10, 8], 2));

//TC: O(N * log(sum(arr) - max(arr) + 1)),   SC: O(1)
