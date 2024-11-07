function bottomView(root) {
  let res = [];
  if (root === null) return res;
  let queue = [];
  queue.push([root, 0]);
  let map = new Map();

  while (queue.length > 0) {
    let [node, vertical] = queue.shift();
    //always update the vertical value in map
    map.set(vertical, node.val);

    if (node.left) queue.push([node.left, vertical - 1]);
    if (node.right) queue.push([node.right, vertical + 1]);
  }
  for (let [key, value] of [...map].sort((a, b) => a[0] - b[0])) {
    res.push(value);
  }

  return res;
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(20);
root.left = new TreeNode(9);
root.right = new TreeNode(22);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(25);
root.left.right.left = new TreeNode(10);
root.left.right.right = new TreeNode(14);

let root1 = new TreeNode(10);
root1.left = new TreeNode(20);
root1.right = new TreeNode(30);
root1.left.left = new TreeNode(40);
root1.left.right = new TreeNode(60);

console.log(bottomView(root));
console.log(bottomView(root1));

// Time Complexity: O(NlogN)
// Space Complexity: O(N)
