/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (str) {
  let i = 0,
    sign = 1,
    num = 0,
    MIN = -2147483648,
    MAX = 2147483647;
  //remove white space from back & front
  str = str.trim();
  //checking sign & keeping track
  if (str[i] == '-' || str[i] == '+') {
    sign = str[i++] == '-' ? -1 : 1;
  }
  //checking if the current char is b/t 0 & 9
  while (
    str[i] &&
    str[i].charCodeAt(0) - 48 <= 9 &&
    str[i].charCodeAt(0) - 48 >= 0
  ) {
    num = num * 10 + (str[i++].charCodeAt(0) - 48);
  }
  //adding sign to final number
  num *= sign;
  return num <= MIN ? MIN : num >= MAX ? MAX : num;
};

console.log(myAtoi(' -042')); //-42
