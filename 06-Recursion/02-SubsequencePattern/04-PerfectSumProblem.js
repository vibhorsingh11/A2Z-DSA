function perfectSum(arr, target, sum, i, n) {
  if (i === n) {
    if (target === sum) {
      return 1;
    } else {
      return 0;
    }
  }
  sum += arr[i];
  let left = perfectSum(arr, target, sum, i + 1, n);
  sum -= arr[i];
  let right = perfectSum(arr, target, sum, i + 1, n);
  return left + right;
}

const arr = [5, 2, 3, 10, 6, 8];
console.log(perfectSum(arr, 10, 0, 0, arr.length));

//TC: O(2^N)  {2 choices pick or not pick and N elements}
//SC: O(N)
