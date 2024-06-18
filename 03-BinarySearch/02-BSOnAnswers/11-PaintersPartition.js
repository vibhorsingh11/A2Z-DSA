function countPainters(arr, mid) {
  let n = arr.length;
  let count = 1;
  let prevBoardsPainted = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] + prevBoardsPainted <= mid) {
      prevBoardsPainted += arr[i];
    } else {
      count++;
      prevBoardsPainted = arr[i];
    }
  }
  return count;
}

function findLargestMinDistance(arr, k) {
  let left = Math.max(...arr),
    right = arr.reduce((acc, ele) => acc + ele, 0);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (countPainters(arr, mid) <= k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(findLargestMinDistance([2, 1, 5, 6, 2, 3], 2)); // 11
console.log(findLargestMinDistance([10, 20, 30, 40], 2)); //60

//TC: O(N * log(sum(arr) - max(arr) + 1)),   SC: O(1)
