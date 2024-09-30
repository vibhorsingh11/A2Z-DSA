/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
    } else {
      if (s[i] === ')') {
        if (stack[stack.length - 1] === '(') {
          stack.pop();
        }
      } else if (s[i] === ']') {
        if (stack[stack.length - 1] === '[') {
          stack.pop();
        }
      } else if (s[i] === '}') {
        if (stack[stack.length - 1] === '{') {
          stack.pop();
        }
      } else {
        stack.push(s[i]);
      }
    }
  }
  return stack.length === 0 ? true : false;
};

console.log(isValid('()[]{}')); //true

//TC: O(N) & SC: O(N)
