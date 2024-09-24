function powerOfTwo(n) {
  if ((n & (n - 1)) === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(powerOfTwo(13)); //false
console.log(powerOfTwo(32)); //true
