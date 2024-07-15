/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (helper(board, word, i, j, rows, cols, 0)) {
        return true;
      }
    }
  }
  return false;
};

function helper(board, word, row, col, rows, cols, indx) {
  if (indx === word.length) return true;

  if (
    row < 0 ||
    row >= rows ||
    col < 0 ||
    col >= cols ||
    board[row][col] !== word[indx]
  ) {
    return false;
  }
  let temp = board[row][col];
  board[row][col] = '#';
  let found =
    helper(board, word, row + 1, col, rows, cols, indx + 1) ||
    helper(board, word, row, col + 1, rows, cols, indx + 1) ||
    helper(board, word, row - 1, col, rows, cols, indx + 1) ||
    helper(board, word, row, col - 1, rows, cols, indx + 1);

  board[row][col] = temp;
  return found;
}

const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  word = 'ABCCED';
console.log(exist(board, word)); //true

//TC: O(m*n*4^k) k is length of word
//SC: O(k) k is lenght of word. due to the recursion stack and the visited matrix
