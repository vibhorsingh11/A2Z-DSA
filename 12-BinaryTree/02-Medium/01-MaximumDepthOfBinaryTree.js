/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  //current node depth which is 1 plus max of left or right
  return Math.max(left, right) + 1;
};

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

console.log(maxDepth(root)); //3

//TC: O(N)
//SC: O(N)
