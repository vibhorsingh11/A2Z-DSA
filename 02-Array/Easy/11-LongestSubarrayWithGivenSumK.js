//Longest Subarray with given Sum K with Positives

function longestSubarray(arr, k) {
  let left = 0,
    right = 0;
  const n = arr.length;
  let maxLen = 0;
  let sum = arr[0];
  while (right < n) {
    while (left <= right && sum > k) {
      sum -= arr[left];
      left++;
    }
    if (sum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    right++;
    if (right < n) {
      sum += arr[right];
    }
  }
  return maxLen;
}

console.log(longestSubarray([2, 3, 5, 1, 9], 9)); //3

//TC: O(2N) Inner loop does not run every time

//Negative values

function longestSubarrayWithNegatives(arr, k) {
  const n = arr.length;
  let map = new Map();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }
    //sum of remaining part
    let rem = sum - k;
    if (map.has(rem)) {
      let len = i - map.get(rem);
      maxLen = Math.max(maxLen, len);
    }
    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }
  return maxLen;
}

console.log(longestSubarrayWithNegatives([-1, 1, 1], 1)); //3

//TC: O(N) or O(N*logN)
