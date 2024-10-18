/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const n = s.length;
  let l = 0,
    r = 0,
    maxLen = 0,
    maxFreq = 0;
  let map = new Map();

  while (r < n) {
    map.set(s[r], (map.get(s[r]) || 0) + 1);
    maxFreq = Math.max(maxFreq, map.get(s[r]));
    if (r - l + 1 - maxFreq > k) {
      map.set(s[l], map.get(s[l]) - 1);
      maxFreq = 0;
      l++;
    }
    if (r - l + 1 - maxFreq <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }
    r++;
  }
  return maxLen;
};

/**
When you're using s[r] - 'A' to get the index in the map, you need to ensure that
the keys in the map are properly managed. Since s[r] is a character, subtracting 'A'
 will give you a number, but the map should be indexed with the character directly or
 an appropriate index. */

//TC: O(N)
//SC: O(1) as, map size is 26
