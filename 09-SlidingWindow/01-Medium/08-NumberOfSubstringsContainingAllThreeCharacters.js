/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  const n = s.length;
  //a,b,c indexes
  const lastSeen = [-1, -1, -1];
  let count = 0;

  for (let i = 0; i < n; i++) {
    lastSeen[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    if (lastSeen[0] !== -1 && lastSeen[1] !== -1 && lastSeen[2] !== -1) {
      count += 1 + Math.min(lastSeen[0], lastSeen[1], lastSeen[2]);
    }
  }
  return count;
};

console.log(numberOfSubstrings('abcabc')); //10

//TC: O(N);
//SC: O(1)
