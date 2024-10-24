/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  const m = g.length,
    n = s.length;
  let l = 0,
    r = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  while (l < m && r < n) {
    if (g[l] <= s[r]) {
      l++;
    }
    r++;
  }
  return l;
};

//TC: O(NlogN) + O(MlogM) + m + n
//SC: O(1)
