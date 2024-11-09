function paths(root) {
  const res = [];
  if (root === null) return res;
  helper(root, res, []);
  return res;
}

function helper(root, res, temp) {
  temp.push(root.val);
  if (!root.left && !root.right) {
    res.push([...temp]);
  } else {
    if (root.left) helper(root.left, res, temp);
    if (root.right) helper(root.right, res, temp);
  }
  temp.pop();
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(20);
root.left = new TreeNode(8);
root.right = new TreeNode(22);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(25);
root.left.right.left = new TreeNode(10);
root.left.right.right = new TreeNode(14);

console.log(paths(root));
// Output: [[20, 8, 5], [20, 8, 3, 10], [20, 8, 3, 14], [20, 22, 4], [20, 22, 25]]

//TC: O(N)
//SC: O(N)  height of the tree
