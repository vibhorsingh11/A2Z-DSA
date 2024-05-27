function quickSort(arr, low, high) {
  if (low < high) {
    let pivot = findPivot(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
}

function findPivot(arr, low, high) {
  let i = low;
  let j = high;
  let pivot = arr[low];
  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;
  return j;
}

const arr = [3, 2, 8, 5, 1, 4, 23];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
