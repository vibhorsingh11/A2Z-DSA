function findUnion(arr1, arr2) {
  let res = [];
  let left = 0,
    right = 0;
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] <= arr2[right]) {
      if (res.length === 0 || res[res.length - 1] !== arr1[left]) {
        res.push(arr1[left]);
      }
      left++;
    } else {
      if (res.length === 0 || res[res.length - 1] !== arr2[right]) {
        res.push(arr2[right]);
      }
      right++;
    }
  }
  while (left < arr1.length) {
    if (res[res.length - 1] !== arr1[left]) res.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    if (res[res.length - 1] !== arr2[right]) res.push(arr2[right]);
    right++;
  }
  return res;
}

console.log(
  findUnion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12])
); //[1,2,3,4,5,6,7,8,9,10,11,12]

//TC O(m+n)
