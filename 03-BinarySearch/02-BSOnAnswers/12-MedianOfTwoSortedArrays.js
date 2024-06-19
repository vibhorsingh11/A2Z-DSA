/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length,
    n2 = nums2.length;
  let n = n1 + n2;
  if (n1 > n2) return findMedianSortedArrays(nums2, nums1);
  //elements on the left side(odd -> more on left, even -> equal on both)
  let low = Math.floor((n1 + n2 + 1) / 2);
  let left = 0;
  //max from arr1/smaller array
  let right = n1;

  while (left <= right) {
    //mid from array 1
    let mid1 = Math.floor((left + right) / 2);
    //total elements needed - already taken from arr1
    let mid2 = low - mid1;

    let l1 = Number.MIN_SAFE_INTEGER,
      l2 = Number.MIN_SAFE_INTEGER;
    let r1 = Number.MAX_SAFE_INTEGER,
      r2 = Number.MAX_SAFE_INTEGER;

    //r1 and r2 from arr1 & arr2 right most element,
    //which is mid
    if (mid1 < n1) r1 = nums1[mid1];
    if (mid2 < n2) r2 = nums2[mid2];
    // l1 & l2 from left side
    //which is mid - 1, the ele before mid
    if (mid1 - 1 >= 0) l1 = nums1[mid1 - 1];
    if (mid2 - 1 >= 0) l2 = nums2[mid2 - 1];
    //checking if it is valid symmetry
    if (l1 <= r2 && l2 <= r1) {
      //if odd total elements
      if (n % 2 === 1) return Math.max(l1, l2);
      else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
    }
    //elimination of right and left
    else if (l1 > r2) right = mid1 - 1;
    else left = mid1 + 1;
  }
  return 0;
};

console.log(findMedianSortedArrays([1, 4, 7, 10, 12], [2, 3, 6, 15])); //6

//TC: O(log(min(n1,n2))), SC: O(1)

// Each half also contains x elements from the first array i.e. arr1[] and
// (n/2)-x elements from the second array i.e. arr2[]
