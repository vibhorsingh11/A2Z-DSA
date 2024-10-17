/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const n = s.length;
  let l = 0,
    r = 0,
    maxLen = 0;
  // let mapArr = new Array(256).fill(-1);
  let mapArr = new Map();
  while (r < n) {
    if (mapArr.has(s[r]) && mapArr.get(s[r]) >= l) {
      l = mapArr.get(s[r]) + 1;
    }
    maxLen = Math.max(maxLen, r - l + 1);
    mapArr.set(s[r], r);
    r++;
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring('abcabcbb')); //3

//TC: O(N)
//SC: O(N)
