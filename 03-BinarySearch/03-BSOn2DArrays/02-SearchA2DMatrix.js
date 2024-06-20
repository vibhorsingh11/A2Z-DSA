/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let n = matrix.length,
    m = matrix[0].length;
  let low = 0,
    high = m * n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let row = Math.floor(mid / m),
      col = mid % m;
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
};

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;
console.log(searchMatrix(matrix, target)); // true

//TC: O(log(m * n)),   SC: O(1)
