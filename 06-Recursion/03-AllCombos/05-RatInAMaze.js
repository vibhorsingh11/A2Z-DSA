function helper(board, res, path, i, j, n, visited) {
  if (i === n - 1 && j === n - 1) {
    res.push(path);
    return;
  }

  //up
  if (i - 1 >= 0 && board[i - 1][j] === 1 && visited[i - 1][j] === 0) {
    visited[i][j] = 1;
    helper(board, res, path + 'U', i - 1, j, n, visited);
    visited[i][j] = 0;
  }
  //left
  if (j - 1 >= 0 && board[i][j - 1] === 1 && visited[i][j - 1] === 0) {
    visited[i][j] = 1;
    helper(board, res, path + 'L', i, j - 1, n, visited);
    visited[i][j] = 0;
  }
  //bottom
  if (i + 1 < n && board[i + 1][j] === 1 && visited[i + 1][j] === 0) {
    visited[i][j] = 1;
    helper(board, res, path + 'D', i + 1, j, n, visited);
    visited[i][j] = 0;
  }
  //right
  if (j + 1 < n && board[i][j + 1] === 1 && visited[i][j + 1] === 0) {
    visited[i][j] = 1;
    helper(board, res, path + 'R', i, j + 1, n, visited);
    visited[i][j] = 0;
  }
}

function printPath(board, n) {
  let res = [];
  let visited = new Array(n).fill().map(() => new Array(n).fill(0));
  if (board[0][0] === 1) helper(board, res, '', 0, 0, n, visited);
  return res;
}

let board = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
console.log(printPath(board, board.length));

//Optimized solution

function helper1(board, res, path, i, j, n, visited, di, dj) {
  if (i === n - 1 && j === n - 1) {
    res.push(path);
    return;
  }
  let dir = 'DLRU';

  for (let indx = 0; indx < 4; indx++) {
    let nexti = i + di[indx];
    let nextj = j + dj[indx];
    //checking boundry
    if (
      nexti >= 0 &&
      nextj >= 0 &&
      nexti < n &&
      nextj < n &&
      visited[nexti][nextj] == 0 &&
      board[nexti][nextj] == 1
    ) {
      visited[i][j] = 1;
      helper1(
        board,
        res,
        path + dir.charAt(indx),
        nexti,
        nextj,
        n,
        visited,
        di,
        dj
      );
      visited[i][j] = 0;
    }
  }
}

function printPath1(board, n) {
  let res = [];
  let visited = new Array(n).fill().map(() => new Array(n).fill(0));
  let di = [1, 0, 0, -1];
  let dj = [0, -1, 1, 0];
  if (board[0][0] === 1) helper1(board, res, '', 0, 0, n, visited, di, dj);
  return res;
}

let board1 = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
console.log(printPath1(board1, board1.length));

//TC: O(4^(m*n))  becoz cell has 4 directions
//SC: O(m*n) max depth of receursive tree
