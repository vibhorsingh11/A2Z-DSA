/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let left = m - 1;
  let right = n - 1;
  let p = m + n - 1;

  while (left >= 0 && right >= 0) {
    if (nums1[left] > nums2[right]) {
      nums1[p] = nums1[left];
      left--;
    } else {
      nums1[p] = nums2[right];
      right--;
    }
    p--;
  }

  // If there are remaining elements in nums2, copy them over
  // (If there are remaining elements in nums1, they are already in place)
  while (right >= 0) {
    nums1[p--] = nums2[right--];
  }
};

let nums1 = [4, 5, 6, 0, 0, 0];
let nums2 = [1, 2, 3];
merge(nums1, 3, nums2, 3);

console.log(nums1); //[1,2,3,4,5,6]

//TC: O(m+n) SC: O(1)
