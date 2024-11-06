function isLeaf(root) {
  return !root.left && !root.right;
}

function leftBoundary(root, res) {
  let curr = root.left;
  while (curr) {
    if (!isLeaf(curr)) {
      res.push(curr.val);
    }
    if (curr.left) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }
}

function rightBoundary(root, res) {
  let curr = root.right;
  let temp = [];
  while (curr) {
    if (!isLeaf(curr)) {
      temp.push(curr.val);
    }
    if (curr.right) {
      curr = curr.right;
    } else {
      curr = curr.left;
    }
  }
  while (temp.length > 0) {
    res.push(temp.pop());
  }
}

// Function to add the leaves of the tree
function leaves(root, res) {
  if (isLeaf(root)) {
    res.push(root.val);
    return;
  }
  if (root.left) {
    leaves(root.left, res);
  }
  if (root.right) {
    leaves(root.right, res);
  }
}

function printLeaves(root) {
  let res = [];
  if (!root) {
    return res;
  }
  if (!isLeaf(root)) {
    res.push(root.val);
  }
  leftBoundary(root, res);
  leaves(root, res);
  rightBoundary(root, res);
  return res;
}

class Node {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new Node(20);
root.left = new Node(8);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);
root.right = new Node(22);
root.right.right = new Node(25);

console.log(printLeaves(root)); //[20, 8, 4, 10, 14, 25, 22]

//TC: O(N)
//SC: O(N)
