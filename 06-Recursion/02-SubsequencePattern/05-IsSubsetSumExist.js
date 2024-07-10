function isSubsetPresent(arr, target, sum, i, n) {
  if (i === n) {
    if (target === sum) {
      return true;
    } else {
      return false;
    }
  }
  sum += arr[i];
  if (isSubsetPresent(arr, target, sum, i + 1, n)) {
    return true;
  }
  sum -= arr[i];
  if (isSubsetPresent(arr, target, sum, i + 1, n)) {
    return true;
  }
  return false;
}

const arr = [4, 2, 5, 6, 7];
console.log(isSubsetPresent(arr, 14, 0, 0, arr.length));

//TC: O(2^N)  {2 choices pick or not pick and N elements}
//SC: O(N)
