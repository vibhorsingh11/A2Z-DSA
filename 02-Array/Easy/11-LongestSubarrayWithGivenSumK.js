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

//TC: O(2n) Inner loop does not run every time
