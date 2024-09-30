function priority(op) {
  if (op === '^') {
    return 3;
  } else if (op === '*' || op === '/') {
    return 2;
  } else if (op === '-' || op === '+') {
    return 1;
  }
  return -1;
}
function infixToPostfix(s) {
  let ans = '',
    stack = [],
    i = 0;
  let n = s.length;

  while (i < n) {
    //check for operand
    if (
      (s[i] >= 'A' && s[i] <= 'Z') ||
      (s[i] >= 'a' && s[i] <= 'z') ||
      (s[i] >= '0' && s[i] <= '9')
    ) {
      ans += s[i];
    } else if (s[i] === '(') {
      stack.push(s[i]);
    } else if (s[i] === ')') {
      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        ans += stack.pop();
      }
      stack.pop();
    } else {
      //check for operator
      while (
        stack.length > 0 &&
        priority(s[i]) < priority(stack[stack.length - 1])
      ) {
        ans += stack.pop();
      }
      stack.push(s[i]);
    }
    i++;
  }
  while (stack.length > 0) {
    ans += stack.pop();
  }
  return ans;
}

console.log(infixToPostfix('a+b*(c^d-e)^(f+g*h)-i'));
//abcd^e-fgh*+^*+i-
