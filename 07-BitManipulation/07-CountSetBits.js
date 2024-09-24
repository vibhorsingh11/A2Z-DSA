function countSetBits(n) {
  let count = 0;

  while (n > 1) {
    count += n & 1;
    n = n >> 1;
  }
  if (n === 1) count++;
  return count;
}

console.log(countSetBits(13));
console.log(countSetBits(16));
