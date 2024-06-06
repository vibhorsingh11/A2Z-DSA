function longestSubarray(arr) {
  const n = arr.length;
  let sum = 0;
  let maxLen = 0;
  let map = new Map();

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum === 0) {
      maxLen = Math.max(maxLen, i + 1);
    } else {
      if (map.has(sum)) {
        maxLen = Math.max(maxLen, i - map.get(sum));
      } else {
        map.set(sum, i);
      }
    }
  }
  return maxLen;
}

console.log(longestSubarray([9, -3, 3, -1, 6, -5])); //5

//TC: O(N), SC: O(N)
