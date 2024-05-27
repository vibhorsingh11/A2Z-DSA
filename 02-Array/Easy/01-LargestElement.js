function largestElement(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  return max;
}

console.log(largestElement([2, 5, 1, 3, 0])); //5
