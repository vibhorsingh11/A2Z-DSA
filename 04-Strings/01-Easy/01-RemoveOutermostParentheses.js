/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const n = s.length;
  let count = 0,
    start = 0;
  let res = '';

  for (let i = 0; i < n; i++) {
    if (s[i] === '(') {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      res += s.slice(start + 1, i);
      start = i + 1;
    }
  }
  return res;
};

console.log(removeOuterParentheses('(()())(())(()(()))')); //"()()()()(())"

//TC: O(N), SC: O(1)
