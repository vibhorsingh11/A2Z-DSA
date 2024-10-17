function totalFruits(arr) {
  const n = arr.length;
  let left = 0,
    right = 0,
    maxLen = 0,
    k = 2;
  let map = new Map();

  while (right < n) {
    map.set(arr[right], (map.get(arr[right]) || 0) + 1);
    //we have more than k distinct fruits, move the left pointer
    if (map.size > k) {
      map.set(arr[left], (map.get(arr[left]) || 0) - 1);
      if (map.get(arr[left]) === 0) {
        map.delete(arr[left]);
      }
      left++;
    }
    if (map.size <= k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    right++;
  }
  return maxLen;
}

console.log(totalFruits([3, 1, 2, 2, 2, 2])); //5

//TC: O(N)
//SC: ~O(1)
