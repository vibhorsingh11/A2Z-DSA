/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  const n = s.length;
  let min = 0,
    max = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      min++;
      max++;
    } else if (s[i] === ")") {
      min--;
      max--;
    } else {
      min--;
      max++;
    }
    if (min < 0) min = 0;
    if (max < 0) return false;
  }
  return min === 0;
};

console.log(checkValidString("(*))")); //true

//TC: O(N)
//SC: O(1)
