/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];
  helper(res, s, 0, new Array());
  return res;
};

function helper(res, s, indx, curr) {
  if (indx === s.length) {
    res.push([...curr]);
    return;
  }
  //check palindrome partition
  for (let i = indx; i < s.length; i++) {
    if (isPalindrome(s, indx, i)) {
      curr.push(s.substring(indx, i + 1));
      helper(res, s, i + 1, curr);
      curr.pop();
    }
  }
}

function isPalindrome(str, start, end) {
  while (start <= end) {
    if (str[start++] !== str[end--]) return false;
  }
  return true;
}

console.log(partition('aab')); //[["a","a","b"],["aa","b"]]

//TC: O(2^N * N) N is the lengtn of string
//TC: O(2^N * N) N is the lengtn of string
