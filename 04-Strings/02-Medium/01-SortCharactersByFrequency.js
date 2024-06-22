/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = new Map();
  for (let ele of s) {
    map.set(ele, map.get(ele) + 1 || 0);
  }

  let updatedMap = new Map([...map].sort((a, b) => b[1] - a[1]));
  let res = '';
  for (let [key, value] of updatedMap) {
    res += key.repeat(value);
  }
  return res;
};

console.log(frequencySort('tree')); //"eert"
