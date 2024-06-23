/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    //getting curr symbol value
    const cur = sym[s[i]];
    //getting next symbol value
    const next = sym[s[i + 1]];

    if (cur < next) {
      result += next - cur;
      i++;
    } else {
      result += cur;
    }
  }

  return result;
};

console.log(romanToInt('MCMXCIV')); //1994
