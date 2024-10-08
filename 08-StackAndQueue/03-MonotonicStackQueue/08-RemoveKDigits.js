/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const n = num.length;
  let stack = [];

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      k > 0 &&
      stack[stack.length - 1] - '0' > num[i] - '0'
    ) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  if (stack.length === 0) return '0';

  while (stack.length > 0 && stack[0] === '0') {
    stack.shift();
  }
  return stack.length > 0 ? stack.join('') : '0';
};

console.log(removeKdigits('1432219', 3)); //'1219

//TC: O(2N) + O(k) + O(N)
//SC: O(N)
