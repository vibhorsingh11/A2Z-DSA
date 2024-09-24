/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  const xor = start ^ goal;
  let count = 0;

  for (let i = 0; i < 32; i++) {
    if (xor & (1 << i)) {
      count++;
    }
  }
  return count;
};

console.log(minBitFlips(10, 7)); //3
