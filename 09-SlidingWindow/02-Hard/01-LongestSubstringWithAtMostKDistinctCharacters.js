function kDistinctChars(arr, k) {
  const n = arr.length;
  let l = 0,
    r = 0,
    maxLen = 0;
  let map = new Map();

  while (r < n) {
    map.set(arr[r], (map.get(arr[r]) || 0) + 1);
    if (map.size > k) {
      map.set(arr[l], (map.get(arr[l]) || 0) - 1);
      if (map.get(arr[l]) === 0) map.delete(arr[l]);
      l++;
    }
    if (map.size <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }
    r++;
  }
  return maxLen;
}

console.log(kDistinctChars('abbbbbbc', 2));
console.log(kDistinctChars('abcddefg', 3));

//TC: O(N) + O(256)
//SC: O(256)
