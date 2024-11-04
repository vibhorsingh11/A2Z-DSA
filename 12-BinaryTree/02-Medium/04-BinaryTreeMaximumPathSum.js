/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = root.val;

  function helper(root) {
    if (root === null) return 0;
    //-ve is not considered
    let left = Math.max(0, helper(root.left));
    let right = Math.max(0, helper(root.right));
    max = Math.max(max, left + right + root.val);
    //return the max of left or right subtree
    return root.val + Math.max(left, right);
  }
  helper(root);
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
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxPathSum(root)); //42

//TC: O(N)
//SC: O(N)
