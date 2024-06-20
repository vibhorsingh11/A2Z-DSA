//Finding the max element in column and returing the row index in which it is
function findMaxIndx(matrix, n, m, col) {
  let maxVal = -1,
    index = -1;

  for (let i = 0; i < n; i++) {
    if (matrix[i][col] > maxVal) {
      maxVal = matrix[i][col];
      index = i;
    }
  }
  return index;
}
function findPeakGrid(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let low = 0,
    high = m - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    //find the max element in that column
    let maxRowIndex = findMaxIndx(matrix, n, m, mid);
    //left side of max row index (mid) & similarly right
    let left = mid - 1 >= 0 ? matrix[maxRowIndex][mid - 1] : -1;
    let right = mid + 1 < m ? matrix[maxRowIndex][mid + 1] : -1;
    if (matrix[maxRowIndex][mid] > left && matrix[maxRowIndex][mid] > right) {
      return [maxRowIndex, mid];
    } else if (matrix[maxRowIndex][mid] < left) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return [-1, -1];
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(findPeakGrid(matrix)); // [2,2]

//TC: O(log m * n), SC: O(1)
