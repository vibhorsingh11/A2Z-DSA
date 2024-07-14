/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  let res = [];
  let combinations = [
    '0',
    '1',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];
  helper(res, combinations, digits, '', 0);
  return res;
};

function helper(res, comArr, digits, str, indx) {
  if (indx === digits.length) {
    res.push(str);
    return;
  }
  //first digit combination from given digits: abc, def
  let letters = comArr[+digits[indx]];
  for (let i = 0; i < letters.length; i++) {
    //Since each recursive call creates its own newStr,
    //there's no need to remove letters[i] afterward
    let newStr = str + letters[i];
    helper(res, comArr, digits, newStr, indx + 1);
  }
}

console.log(letterCombinations('23')); //["ad","ae","af","bd","be","bf","cd","ce","cf"]

//TC: O(4^N) 4 can be the branching factor
//TC: O(4^N)
