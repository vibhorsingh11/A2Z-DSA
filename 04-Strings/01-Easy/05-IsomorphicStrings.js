// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (new Set(s).size !== new Set(t).size) return false;
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) != t[i]) {
      return false;
    } else {
      map.set(s[i], t[i]);
    }
  }
  return true;
};

let s = 'egg',
  t = 'add';
console.log(isIsomorphic(s, t)); //true
