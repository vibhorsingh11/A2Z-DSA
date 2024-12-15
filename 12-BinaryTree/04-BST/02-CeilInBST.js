/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var findCeil = function (root, val) {
  let ceil = -1;
  while (root !== null) {
    if (root.val === val) {
      ceil = root.val;
      return ceil;
    }
    if (root.val > val) {
      ceil = root.val;
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return ceil;
};

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(7);
root.left.right = new TreeNode(2);
root.left.right.right = new TreeNode(3);

console.log(findCeil(root, 3));

//TC: O(logn) - n is the number of nodes in the BST
//SC: O(1)
