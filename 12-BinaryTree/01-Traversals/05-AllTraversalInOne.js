function preInPostTraversal(root) {
  let pre = [];
  let ino = [];
  let post = [];
  if (root === null) return [];
  let stack = [];
  stack.push([root, 1]);

  while (stack.length > 0) {
    let [node, count] = stack.pop();
    if (node === null) continue;
    if (count === 1) {
      pre.push(node.val);
      stack.push([node, 2]);
      if (node.left !== null) stack.push([node.left, 1]);
    } else if (count === 2) {
      ino.push(node.val);
      stack.push([node, 3]);
      if (node.right !== null) stack.push([node.right, 1]);
    } else {
      post.push(node.val);
    }
  }

  return [pre, ino, post];
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

console.log(preInPostTraversal(root));

//Preorder traversal: 1 2 4 5 3 Inorder traversal: 4 2 5 1 3 Postorder traversal: 4 5 2 3 1
