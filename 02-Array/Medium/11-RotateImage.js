/**
 * @param {number[][]} matrix
 * @return {number[][]} matrix
 */
var rotate = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  //reverse till half column
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n / 2; j++) {
      [matrix[i][j], matrix[i][n - 1 - j]] = [
        matrix[i][n - 1 - j],
        matrix[i][j],
      ];
    }
  }

  return matrix;
};

console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
); //[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

//TC: O(N*2), SC: O(1)
