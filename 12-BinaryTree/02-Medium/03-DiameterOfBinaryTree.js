/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0;
  function helper(root, max) {
    if (root === null) return 0;
    let left = helper(root.left);
    let right = helper(root.right);
    max = Math.max(max, left + right);
    return 1 + Math.max(left, right);
  }
  helper(root, max);
  return max;
};

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); //3
