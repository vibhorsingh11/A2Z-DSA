//Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the
//elements on its right side in the array.

function leader(arr) {
  const n = arr.length;
  let max = arr[n - 1];
  let res = [];
  res.push(max);

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
      res.push(arr[i]);
    }
  }
  res = reverseArray(res);
  return res;
}

function reverseArray(arr) {
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

console.log(leader([10, 22, 12, 3, 0, 6])); // [22,12,6]

//TC: O(N) SC: O(N)
