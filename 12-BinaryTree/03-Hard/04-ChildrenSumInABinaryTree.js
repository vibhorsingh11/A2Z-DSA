function childernSum(root) {
  if (root === null || (root.left === null && root.right === null)) {
    return true;
  }
  let sum = 0;
  if (root.left !== null) sum += root.left.val;
  if (root.right !== null) sum += root.right.val;

  return root.val === sum && checkTree(root.left) && checkTree(root.right);
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(35);
root.left = new TreeNode(20);
root.right = new TreeNode(15);
root.left.left = new TreeNode(15);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

// let root = new TreeNode(1);
// root.left = new TreeNode(4);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(5);

console.log(childernSum(root)); //1
