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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  let res = 0;
  if (root === null) return res;
  let queue = [];
  //node and index
  queue.push([root, 0]);

  while (queue.length > 0) {
    let size = queue.length;
    //min index of the level
    let min = queue[0][1];
    let first = 0,
      last = 0;
    for (let i = 0; i < size; i++) {
      let [node, index] = queue.shift();
      let currId = index - min;
      //first and last index of the level
      if (i === 0) first = currId;
      if (i === size - 1) last = currId;
      if (node.left) queue.push([node.left, currId * 2 + 1]);
      if (node.right) queue.push([node.right, currId * 2 + 2]);
    }
    res = Math.max(res, last - first + 1);
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

let root = new TreeNode(1);
root.left = new TreeNode(3);
root.right = new TreeNode(2);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(9);

console.log(widthOfBinaryTree(root)); // 4

//TC: O(N)
//SC: O(N) height of the tree
