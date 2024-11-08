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
 * @return {number[]}
 */
var rightSideView = function (root) {
  let res = [];
  if (root === null) return res;
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;
    while (size > 0) {
      let node = queue.shift();
      if (size === 1) {
        res.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      size--;
    }
  }
  return res;
};

//Recursive solution
function helper(root, level, res) {
  if (root === null) return;

  if (level === res.length) {
    res.push(root.val);
  }
  helper(root.right, level++, res);
  helper(root.left, level++, res);
}

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
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);

console.log(rightSideView(root)); // Output: [1, 3, 4]

//TC: O(N)
//SC: O(N)
