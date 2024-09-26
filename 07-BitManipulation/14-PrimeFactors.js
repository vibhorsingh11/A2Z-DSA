function primeFactors(n) {
  let res = [];
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      res.push(i);
      while (n % i === 0) {
        n = n / i;
      }
    }
  }
  if (n !== 1) res.push(n);
  return res;
}

console.log(primeFactors(20)); //2,5
console.log(primeFactors(7)); //7

//TC: O(sqrt(n) x log(n))
