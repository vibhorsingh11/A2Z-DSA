/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];

  function helper(root) {
    if (root === null) return;
    helper(root.left);
    res.push(root.val);
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

console.log(inorderTraversal(root)); // [1,3,2]

//TC: O(N)
//SC: O(N)

//Alternate solution using iterative approach

var inorderTraversal = function (root) {
  let res = [];
  if (root === null) return res;
  let stack = [];
  let curr = root;

  while (curr || stack.length > 0) {
    if (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    } else {
      if (stack.length === 0) break;
      curr = stack.pop();
      res.push(curr.val);
      curr = curr.right;
    }
  }
  return res;
};
