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
var countNodes = function (root) {
  if (root === null) return 0;
  //TC: O(log N)
  let lH = findLeftHeight(root);
  let rH = findRightHeight(root);
  //if equal then 2^height - 1
  if (lH === rH) return (1 << lH) - 1;
  //else count node in subtree
  return 1 + countNodes(root.left) + countNodes(root.right);
};

function findLeftHeight(root) {
  let lHeight = 0;
  //traversing only left nodes
  while (root) {
    lHeight++;
    root = root.left;
  }
  return lHeight;
}

function findRightHeight(root) {
  let rHeight = 0;
  //traversing only right nodes
  while (root) {
    rHeight++;
    root = root.right;
  }
  return rHeight;
}

//TC: O(logN * logN)
//SC: O(logN)

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
root.right.left = new TreeNode(6);

console.log(countNodes(root)); //6
