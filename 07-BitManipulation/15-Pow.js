function myPow(x, n) {
  let res = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      res *= x;
      n = n - 1;
    } else {
      n = n / 2;
      x *= x;
    }
  }
  return res;
}

console.log(myPow(2, 10)); //1024

//TC: O(log(n))
//SC: O(1)
