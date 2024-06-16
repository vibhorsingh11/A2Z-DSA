/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  let n = arr.length;
  //if no divisor
  if (n > threshold) return -1;
  let left = 1,
    right = Math.max(...nums);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let sum = divisorHelper(nums, mid);
    if (sum > threshold) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  //oppisite polarity so left
  return left;
};

function divisorHelper(arr, divisor) {
  let n = arr.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += Math.ceil(arr[i] / divisor);
  }
  return sum;
}

console.log(smallestDivisor([44, 22, 33, 11, 1], 5)); //44

//TC: O(log max(arr) * N), SC: O(1)
