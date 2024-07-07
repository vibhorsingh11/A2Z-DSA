/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];

  function helper(currentStr, open, close) {
    //Each pair contributes 2 characters (( and )),
    //so the total length of the sequence will be 2 * 3 = 6.
    if (currentStr.length === 2 * n) {
      res.push(currentStr);
      return;
    }
    //opening parenthesis '('
    if (open < n) {
      helper(currentStr + '(', open + 1, close);
    }
    if (close < open) {
      helper(currentStr + ')', open, close + 1);
    }
  }
  helper('', 0, 0);
  return res;
};

console.log(generateParenthesis(3));

//TC: O(2^N)
