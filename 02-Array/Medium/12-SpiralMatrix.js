/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix[0].length;
  let n = matrix.length;
  let top = 0,
    left = 0,
    bottom = n - 1,
    right = m - 1;

  let ans = [];

  while (left <= right && top <= bottom) {
    //left to right
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    top++;
    //top to bottom
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }
    right--;
    //right to left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }
    }
    bottom--;
    //bottom to top
    if (left <= right)
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }
    left++;
  }
  return ans;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
); // [1,2,3,4,8,12,11,10,9,5,6,7]

//TC: O(MxN) SC: O(1)
