function clearIthBitFromRight(n, i) {
  return n & ~(1 << i);
}

console.log(clearIthBitFromRight(13, 2)); //9
