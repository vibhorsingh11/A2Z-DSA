function makeParents(root, parentMap, target) {
  let queue = [];
  queue.push(root);
  let targetNode = null;

  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr.val === target) targetNode = curr;
    if (curr.left) {
      parentMap.set(curr.left, curr);
      queue.push(curr.left);
    }
    if (curr.right) {
      parentMap.set(curr.right, curr);
      queue.push(curr.right);
    }
  }
  return targetNode;
}

function minTime(parentMap, target) {
  let queue = [];
  queue.push(target);
  let visited = new Set();
  visited.add(target);
  let max = 0;

  while (queue.length > 0) {
    let size = queue.length;
    let flag = false;
    while (size > 0) {
      let curr = queue.shift();
      if (curr.left && !visited.has(curr.left)) {
        queue.push(curr.left);
        visited.add(curr.left);
        flag = true;
      }
      if (curr.right && !visited.has(curr.right)) {
        queue.push(curr.right);
        visited.add(curr.right);
        flag = true;
      }
      //if parent of curr is not visited, add it to the queue
      if (parentMap.has(curr) && !visited.has(parentMap.get(curr))) {
        queue.push(parentMap.get(curr));
        visited.add(parentMap.get(curr));
        flag = true;
      }
      size--;
    }
    if (flag) {
      max++;
    }
  }
  return max;
}

function timeToBurnTree(root, node) {
  let parentMap = new Map();
  let targetNode = makeParents(root, parentMap, node);
  return minTime(parentMap, targetNode);
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
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(8);
root.right.right = new TreeNode(6);
root.right.right.right = new TreeNode(9);
root.right.right.right.right = new TreeNode(10);

console.log(timeToBurnTree(root, 8)); //7
