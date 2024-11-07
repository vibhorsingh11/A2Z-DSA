function topView(root) {
  let queue = [];
  queue.push([root, 0]);
  let map = new Map();

  while (queue.length > 0) {
    let [node, vertical] = queue.shift();
    if (!map.has(vertical)) {
      map.set(vertical, node.val);
    }

    if (node.left) queue.push([node.left, vertical - 1]);
    if (node.right) queue.push([node.right, vertical + 1]);
  }
  let res = [];
  //sorting on basis of keys of map which are verticals
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

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(topView(root));

//TC: O(NlogN)
//SC: O(N)
