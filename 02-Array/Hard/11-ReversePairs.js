/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  return mergeSort(nums, 0, nums.length - 1);
};

function merge(arr, low, mid, high) {
  let res = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      res.push(arr[left]);
      left++;
    } else {
      res.push(arr[right]);
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
}

function countPairs(arr, low, mid, high) {
  let right = mid + 1;
  let count = 0;

  for (let i = low; i <= mid; i++) {
    while (right <= high && arr[i] > 2 * arr[right]) right++;
    count += right - (mid + 1);
  }

  return count;
}

function mergeSort(nums, low, high) {
  let count = 0;
  if (low >= high) return count;
  let mid = Math.floor((low + high) / 2);
  count += mergeSort(nums, low, mid);
  count += mergeSort(nums, mid + 1, high);
  count += countPairs(nums, low, mid, high);
  merge(nums, low, mid, high);
  return count;
}

console.log(reversePairs([1, 3, 2, 3, 1])); //2

//TC: O(2NlogN), SC: O(N)
