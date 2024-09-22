//Left shift operator
function KBitSet(n, k) {
  if (n && 1 << k) {
    return true;
  }
  return false;
}

console.log(KBitSet(4, 2));

//Right shift operator
function KBitSetRight(n, k) {
  if (n >> k && 1 === 0) {
    return false;
  }
  return true;
}

console.log(KBitSetRight(4, 2));
