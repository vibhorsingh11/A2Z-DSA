/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  let row = matrix.length; //row
  let col = matrix[0].length; // col
  let prefixSum = new Array(row).fill(0).map(() => new Array(col).fill(0));
  let maxArea = 0,
    sum = 0;

  //Calculate the prefix sum matrix and then
  //calculate largest histogram area
  for (let i = 0; i < col; i++) {
    sum = 0;
    for (let j = 0; j < row; j++) {
      sum += matrix[j][i] - '0';
      if (matrix[j][i] === '0') sum = 0;
      prefixSum[j][i] = sum;
    }
  }

  for (let i = 0; i < row; i++) {
    maxArea = Math.max(maxArea, largestRectangleArea(prefixSum[i]));
  }

  return maxArea;
};

function largestRectangleArea(arr) {
  let stack = [],
    maxArea = 0,
    n = arr.length;
  let nse = 0,
    pse = 0,
    elementIndex = 0;

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      elementIndex = stack.pop();
      nse = i;
      pse = stack.length === 0 ? -1 : stack[stack.length - 1];
      maxArea = Math.max(maxArea, arr[elementIndex] * (nse - pse - 1));
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    elementIndex = stack.pop();
    nse = n;
    pse = stack.length === 0 ? -1 : stack[stack.length - 1];
    maxArea = Math.max(maxArea, arr[elementIndex] * (nse - pse - 1));
  }
  return maxArea;
}

console.log(
  maximalRectangle([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ])
); // 6

//TC: O(M x N) + O(N x 2M)
//SC: O(N x M)
