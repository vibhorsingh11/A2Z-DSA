function isPrime(n) {
  let count = 0;

  for (let i = 0; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++;
      if (n / i !== i) {
        count++;
      }
    }
    if (count > 2) break;
  }
  return count === 2;
}

console.log(isPrime(20)); //false
console.log(isPrime(7)); //true

//TC: O(sqrt(n))
