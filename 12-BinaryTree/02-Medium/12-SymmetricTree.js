/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return root === null || helper(root.left, root.right);
};

function helper(left, right) {
  if (left === null || right === null) {
    return left === right;
  }
  if (left.val !== right.val) return false;
  //if both sides return true
  return helper(left.left, right.right) && helper(left.right, right.left);
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root)); // true

//TC: O(N)
//SC: O(N)
