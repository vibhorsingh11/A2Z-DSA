function lowerBound(arr, m, k) {
  let left = 0,
    right = m - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === k) {
      return mid;
    } else if (arr[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return m;
}

function rowWithMax1s(arr, n, m) {
  let countMax = 0;
  let index = -1;
  for (let i = 0; i < n; i++) {
    //subtracting row length from where 1's index was found
    // to get the count of one's
    let countOnes = m - lowerBound(arr[i], m, 1);
    if (countOnes > countMax) {
      index = i;
      countMax = countOnes;
    }
  }
  return index;
}

const matrix = [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 0],
];
const n = 3,
  m = 3;
console.log(rowWithMax1s(matrix, n, m)); //0

//TC: O(N * logM),   SC:O(1)
