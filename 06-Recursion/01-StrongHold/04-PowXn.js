/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
  if (n === 0) return 1; // Any number to the power of 0 is 1

  let result = 1;
  /** */
  let base = n < 0 ? 1 / x : x;
  let exponent = Math.abs(n);

  while (exponent > 0) {
    //If exponent is odd, multiply the result by base. This accounts for the extra multiplication
    //needed when exponent is not perfectly divisible by 2.
    if (exponent % 2 === 1) {
      result *= base;
    }
    base *= base;
    exponent = Math.floor(exponent / 2);
  }

  return result;
}

console.log(myPow(2.0, 10)); // 1024.00000
console.log(myPow(2.1, 3)); //  9.26100
console.log(myPow(2.0, -2)); // 0.25000
