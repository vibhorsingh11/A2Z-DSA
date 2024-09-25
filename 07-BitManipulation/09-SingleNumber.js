/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;
  for (let num of nums) {
    //same number will get canceled as 0
    //and single no. will return
    result ^= num;
  }
  return result;
};

console.log(singleNumber([4, 1, 2, 1, 2])); //4
