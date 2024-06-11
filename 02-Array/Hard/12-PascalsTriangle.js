/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const n = numRows;
  let ans = [];

  // store the entire pascal's triangle:
  for (let row = 1; row <= n; row++) {
    ans.push(generateRow(row));
  }
  return ans;
};

function generateRow(row) {
  let ans = 1;
  let ansRow = [1]; // inserting the 1st element

  // calculate the rest of the elements:
  for (let col = 1; col < row; col++) {
    ans = ans * (row - col);
    ans = ans / col;
    ansRow.push(ans);
  }
  return ansRow;
}

console.log(generate(5)); //[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

//TC: O(Nx2), SC: O(1)
