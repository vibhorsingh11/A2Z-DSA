/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let str = s.split(' ');
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] != '') {
      if (res.length > 0) {
        res += ' ';
      }
      res += str[i];
    }
  }
  return res;
};

console.log(reverseWords('a good   example')); //"example good a"

//TC: O(N),   SC:(1)
