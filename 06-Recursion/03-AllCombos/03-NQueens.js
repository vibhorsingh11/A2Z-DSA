/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = [];
  let leftRow = new Array(n).fill(0);
  let lowerLeftRow = new Array(2 * n - 1).fill(0);
  let upperLeftRow = new Array(2 * n - 1).fill(0);
  let board = new Array(n).fill().map(() => new Array(n).fill('.'));

  helper(0, res, board, leftRow, upperLeftRow, lowerLeftRow);
  return res;
};

function helper(col, res, board, leftRow, upperLeftRow, lowerLeftRow) {
  if (col === board.length) {
    let rows = board.map((row) => row.join(''));
    res.push(rows);
    return;
  }
  for (let row = 0; row < board.length; row++) {
    if (
      leftRow[row] == 0 &&
      lowerLeftRow[row + col] == 0 &&
      upperLeftRow[board.length - 1 + col - row] == 0
    ) {
      board[row][col] = 'Q';
      leftRow[row] = 1;
      lowerLeftRow[row + col] = 1;
      upperLeftRow[board.length - 1 + col - row] = 1;
      helper(col + 1, res, board, leftRow, upperLeftRow, lowerLeftRow);
      board[row][col] = '.';
      leftRow[row] = 0;
      lowerLeftRow[row + col] = 0;
      upperLeftRow[board.length - 1 + col - row] = 0;
    }
  }
}

//TC: O(N!)
//SC: O(N)
