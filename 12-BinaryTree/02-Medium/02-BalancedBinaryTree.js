/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return helper(root) !== -1;
};

function helper(root) {
  if (root === null) return 0;
  let left = helper(root.left);
  if (left === -1) return -1;
  let right = helper(root.right);
  if (right === -1) return -1;
  //if diff of left and right subtree is more than 1
  //its not balanced
  if (Math.abs(left - right) > 1) return -1;
  return 1 + Math.max(left, right);
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(isBalanced(root)); //true

//TC: O(N)
//SC: O(N)
