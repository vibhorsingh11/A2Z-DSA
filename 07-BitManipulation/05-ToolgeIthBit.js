function toggleIthBit(n, i) {
  return n ^ (1 << i);
}

console.log(toggleIthBit(13, 1)); //15
