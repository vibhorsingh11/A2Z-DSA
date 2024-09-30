function postfixToPrefix(s) {
  let stack = [];
  const n = s.length;
  let i = 0;

  while (i < n) {
    if (
      (s[i] >= 'A' && s[i] <= 'Z') ||
      (s[i] >= 'a' && s[i] <= 'z') ||
      (s[i] >= '0' && s[i] <= '9')
    ) {
      stack.push(s[i]);
    } else {
      const t1 = stack.pop();
      const t2 = stack.pop();
      const str = s[i] + t2 + t1;
      stack.push(str);
    }
    i++;
  }
  return stack.pop();
}

console.log(postfixToPrefix('ABC/-AK/L-*'));
//*-A/BC-/AKL

//TC: O(2N)
//SC: O(N)
