function convertTree(root) {
  if (root === null) return;
  let childSum = 0;
  if (root.left) childSum += root.left.val;
  if (root.right) childSum += root.right.val;

  if (childSum >= root.val) root.val = childSum;
  else {
    if (root.left) root.left.val = root.val;
    if (root.right) root.right.val = root.val;
  }
  convertTree(root.left);
  convertTree(root.right);

  let total = 0;
  if (root.left) total += root.left.val;
  if (root.right) total += root.right.val;
  //calculate sum of the values of the left and right children and
  //update the current node’s value to match the total sum of its children.
  if (root.left || root.right) root.val = total;
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(50);
root.left = new TreeNode(7);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(30);

convertTree(root);
