function postfixToInfix(s) {
  let stack = [],
    i = 0;
  let n = s.length;

  while (i < n) {
    if (
      (s[i] >= 'A' && s[i] <= 'Z') ||
      (s[i] >= 'a' && s[i] <= 'z') ||
      (s[i] >= '0' && s[i] <= '9')
    ) {
      stack.push(s[i]);
    } else {
      const t2 = stack.pop();
      const t1 = stack.pop();
      const str = '(' + t1 + s[i] + t2 + ')';
      stack.push(str);
    }
    i++;
  }
  return stack.pop();
}

console.log(postfixToInfix('ab*c+'));
//((a*b)+c)
