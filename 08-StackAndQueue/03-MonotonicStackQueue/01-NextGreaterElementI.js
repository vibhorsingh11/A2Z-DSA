/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const res = [],
    stack = [];
  const map = new Map();

  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      map.set(nums2[i], -1);
    } else {
      map.set(nums2[i], stack[stack.length - 1]);
    }
    stack.push(nums2[i]);
  }
  for (let num of nums1) {
    res.push(map.get(num));
  }
  return res;
};

let nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2)); //[ -1, 3, -1 ]
(nums1 = [2, 4]), (nums2 = [1, 2, 3, 4]);
console.log(nextGreaterElement(nums1, nums2)); //[3,-1]

//TC: O(N + M)
//SC: O(N + M);
