//The problem is to set the ith rightmost unset bit in the binary representation of n.

function setIthBitFromRight(n, i) {
  return n | (1 << i);
}

console.log(setIthBitFromRight(9, 2)); // Outputs: 13
