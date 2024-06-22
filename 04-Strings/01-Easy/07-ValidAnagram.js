/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    arr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }
  for (let c of arr) {
    if (c !== 0) {
      return false;
    }
  }
  return true;
};

let s = 'anagram',
  t = 'nagaram';
console.log(isAnagram(s, t)); //true
