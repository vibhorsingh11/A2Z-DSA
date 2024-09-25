//Pattern from 1->4
function findXOR(N) {
  if (N % 4 === 1) return 1;
  else if (N % 4 === 2) return N + 1;
  else if (N % 4 === 3) return 0;
  else return N;
}

//XOR of L-1 (1->2->3) with 1->R (1->2->3->4->5->6->7->8)
function findRangeXOR(L, R) {
  return findXOR(L - 1) ^ findXOR(R);
}

console.log(findRangeXOR(4, 8)); //8
