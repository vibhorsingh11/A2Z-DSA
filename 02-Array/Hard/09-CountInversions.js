function merge(arr, low, mid, high) {
  let left = low;
  let right = mid + 1;
  let res = [];
  let count = 0;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      res.push(arr[left]);
      left++;
    } else {
      res.push(arr[right]);
      count += mid - left + 1;
      right++;
    }
  }

  while (left <= mid) {
    res.push(arr[left]);
    left++;
  }

  while (right <= high) {
    res.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = res[i - low];
  }
  return count;
}
function mergeSort(arr, low, high) {
  let count = 0;
  if (low >= high) return count;
  let mid = Math.floor((low + high) / 2);
  count += mergeSort(arr, low, mid);
  count += mergeSort(arr, mid + 1, high);
  count += merge(arr, low, mid, high);
  return count;
}

const arr = [5, 4, 3, 2, 1];
console.log(mergeSort(arr, 0, arr.length - 1));

//TC: O(NlogN) SC: O(N)
