function helper(str, res, n) {
  let len = str.length;
  if (len === n) {
    res.push(str);
    return;
  }
  if (str[len - 1] === '1') {
    helper(str + '0', res, n);
  } else {
    helper(str + '0', res, n);
    helper(str + '1', res, n);
  }
}
function generateAllBinaryStrings(n) {
  let str = '';
  let res = [];

  str += '0';
  helper(str, res, n);

  str = '1';
  helper(str, res, n);
  return res;
}

console.log(generateAllBinaryStrings(4));

//TC: O(2^N)
//SC: O(2^N * N),  N is the res array
