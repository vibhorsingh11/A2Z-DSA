/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // take a look at the four corners: (0, 0), (0, m-1), (n-1, 0), and (n-1, m-1)
  let n = matrix.length,
    m = matrix[0].length;
  let row = 0,
    col = m - 1;

  while (row < n && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      col--;
    }
  }
  return false;
};

let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  target = 5;
console.log(searchMatrix(matrix, target)); // true

//TC: O(n + n), SC: O(1)
