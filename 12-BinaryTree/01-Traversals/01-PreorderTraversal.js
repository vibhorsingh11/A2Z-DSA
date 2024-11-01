/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [];

  function helper(root) {
    if (root === null) return;
    res.push(root.val);
    helper(root.left);
    helper(root.right);
  }
  helper(root);
  return res;
};

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(preorderTraversal(root)); // [1,2,3]

//TC: O(N)
//SC: O(N)

//Alternate solution using iterative approach

var preorderTraversal = function (root) {
  let res = [];
  if (root === null) return res;
  let stack = [];
  stack.push(root);

  while (stack.length > 0) {
    let curr = stack.pop();
    res.push(curr.val);
    if (curr.right !== null) stack.push(curr.right);
    if (curr.left !== null) stack.push(curr.left);
  }
  return res;
};
