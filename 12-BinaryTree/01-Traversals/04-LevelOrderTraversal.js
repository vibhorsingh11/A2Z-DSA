/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];
  const queue = [];
  const res = [];
  queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;
    let temp = [];
    //Gathering each level nodes
    while (size > 0) {
      let curr = queue.shift();
      if (curr.left !== null) queue.push(curr.left);
      if (curr.right !== null) queue.push(curr.right);
      temp.push(curr.val);
      size--;
    }
    res.push(temp);
  }
  return res;
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

console.log(levelOrder(root)); //[[3],[9,20],[15,7]]
// Time Complexity: O(n) where n is the number of nodes in the binary tree
// Space Complexity: O(n) for the queue and the result array
