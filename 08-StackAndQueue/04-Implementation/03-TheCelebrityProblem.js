function findCelebrity(matrix) {
  const n = matrix.length;
  let top = 0,
    bottom = n - 1;

  while (top < bottom) {
    if (matrix[top][bottom] === 1) {
      top++;
    } else if (matrix[bottom][top] === 1) {
      bottom--;
    } else {
      //both does'nt know anyone
      //someone has to know other
      top++;
      bottom--;
    }
  }
  if (top > bottom) return -1;
  for (let i = 0; i < n; i++) {
    //diagnol
    if (i === top) continue;
    if (matrix[top][i] === 0 && matrix[i][top] === 1) {
    } else {
      return -1;
    }
  }
  return top;
}

const matrix = [
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
];
console.log(findCelebrity(matrix));

//TC: O(2N)
//SC: O(1)
