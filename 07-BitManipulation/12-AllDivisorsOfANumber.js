function allDivisors(n) {
  let res = [];

  for (let i = 0; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      res.push(i);
      if (n / i !== i) {
        res.push(n / i);
      }
    }
  }
  return res;
}

console.log(allDivisors(20)); //1 2 4 5 10 20

//TC: O(sqrt(n))
