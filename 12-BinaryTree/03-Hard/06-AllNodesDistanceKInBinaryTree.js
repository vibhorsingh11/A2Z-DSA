/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  let parentMap = new Map();
  makeParents(root, parentMap);
  let visited = new Map();
  let queue = [];
  queue.push(target);
  visited.set(target, true);
  let currLevel = 0;
  while (queue.length > 0) {
    let size = queue.length;
    if (currLevel === k) break;
    while (size > 0) {
      let curr = queue.shift();
      if (curr.left && !visited.has(curr.left)) {
        queue.push(curr.left);
        visited.set(curr.left, true);
      }
      if (curr.right && !visited.has(curr.right)) {
        queue.push(curr.right);
        visited.set(curr.right, true);
      }
      //if parent of curr is not visited, add it to the queue
      if (parentMap.has(curr) && !visited.has(parentMap.get(curr))) {
        queue.push(parentMap.get(curr));
        visited.set(parentMap.get(curr), true);
      }
      size--;
    }
    currLevel++;
  }
  let res = [];
  while (queue.length > 0) {
    res.push(queue.shift().val);
  }
  return res;
};

//parentMap to store the parent of each node
function makeParents(root, parentMap) {
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr.left) {
      //curr, parent of curr.left
      parentMap.set(curr.left, curr);
      queue.push(curr.left);
    }
    if (curr.right) {
      parentMap.set(curr.right, curr);
      queue.push(curr.right);
    }
  }
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

console.log(distanceK(root, 5, 2)); //[7, 4, 1]

//TC: O(N) + O(N) => O(N)
//SC: O(N)
