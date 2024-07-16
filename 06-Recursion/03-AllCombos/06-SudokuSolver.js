/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  solve(board);
};

function solve(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === '.') {
        for (let c = 1; c <= 9; c++) {
          if (isValid(board, i, j, c)) {
            board[i][j] = String(c);

            if (solve(board) === true) {
              return true;
            } else {
              board[i][j] = '.';
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

let isValid = (board, row, col, c) => {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] == c) {
      return false;
    }
    if (board[row][i] == c) {
      return false;
    }

    const boardRow = Math.floor(row / 3);
    const boardCol = Math.floor(col / 3);

    const currRow = 3 * boardRow + Math.floor(i / 3);
    const currCol = 3 * boardCol + (i % 3);

    if (board[currRow][currCol] == c) return false;
  }
  return true;
};

//TC: O(9(N*M))
//SC: O(N*M)
