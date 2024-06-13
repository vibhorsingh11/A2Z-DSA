function countRotation(arr) {
  let left = 0,
    right = arr.length - 1;
  let min = Infinity,
    indx = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[left] <= arr[right]) {
      if (min > arr[left]) {
        min = arr[left];
        indx = left;
      }
      break;
    }

    if (arr[left] <= arr[mid]) {
      if (min > arr[left]) {
        min = arr[left];
        indx = left;
      }
      left = mid + 1;
    } else {
      if (min > arr[mid]) {
        min = arr[mid];
        indx = left;
      }
      right = mid - 1;
    }
  }

  return indx;
}

console.log(countRotation([4, 5, 6, 7, 0, 1, 2, 3])); //4

//TC: O(logN), SC: O(1)
