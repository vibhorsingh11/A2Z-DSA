function prefixToPostfix(s) {
  let stack = [];
  const n = s.length;
  let i = n;

  while (i >= 0) {
    if (
      (s[i] >= 'A' && s[i] <= 'Z') ||
      (s[i] >= 'a' && s[i] <= 'z') ||
      (s[i] >= '0' && s[i] <= '9')
    ) {
      stack.push(s[i]);
    } else {
      const t1 = stack.pop();
      const t2 = stack.pop();
      const str = t1 + t2 + s[i];
      stack.push(str);
    }
    i--;
  }
  return stack.pop();
}

console.log(prefixToPostfix('*-A/BC-/AKL'));
//ABC/-AK/L-*

//TC: O(2N)
//SC: O(N)
