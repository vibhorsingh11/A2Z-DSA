/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  const n = s.length;
  let count = 0,
    max = 0;

  for (let c of s) {
    if (c === '(') count++;
    else if (c === ')') count--;
    max = Math.max(count, max);
  }
  return max;
};

console.log(maxDepth('(1+(2*3)+((8)/4))+1')); //3
