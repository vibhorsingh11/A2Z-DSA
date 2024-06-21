/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  const n = num.length;
  for (let i = n - 1; i >= 0; i--) {
    if (parseInt(num.charAt(i)) % 2 === 1) {
      return num.slice(0, i + 1);
    }
  }
  return '';
};

console.log(largestOddNumber('35427')); // "35427"

//TC: O(N),   SC:(1)
