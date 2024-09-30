function prefixToInfix(s) {
  let stack = [];
  const n = s.length;
  let i = n - 1;

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
      const str = '(' + t1 + s[i] + t2 + ')';
      stack.push(str);
    }
    i--;
  }
  return stack.pop();
}

console.log(prefixToInfix('*-A/BC-/AKL'));
//((A-(B/C))*((A/K)-L))

//TC: O(2N)
//SC: O(N)
