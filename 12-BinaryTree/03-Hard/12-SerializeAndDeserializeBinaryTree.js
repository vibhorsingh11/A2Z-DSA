/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (root === null) return "";
  let res = [];
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr === null) {
      res.push("#");
    } else {
      res.push(curr.val.toString());
      queue.push(curr.left);
      queue.push(curr.right);
    }
  }
  return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "") return null;
  let str = data.split(",");

  let queue = [];
  let rootVal = str.shift();
  let root = new TreeNode(parseInt(rootVal));
  queue.push(root);
  while (queue.length > 0) {
    let curr = queue.shift();
    let leftVal = str.shift();

    if (leftVal !== "#") {
      let leftNode = new TreeNode(parseInt(leftVal));
      curr.left = leftNode;
      queue.push(leftNode);
    }
    let rightVal = str.shift();

    if (rightVal !== "#") {
      let rightNode = new TreeNode(parseInt(rightVal));
      curr.right = rightNode;
      queue.push(rightNode);
    }
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

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
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

let serialized = serialize(root);
let deserialized = deserialize(serialized);

//TC: O(N)
//SC: O(N)
