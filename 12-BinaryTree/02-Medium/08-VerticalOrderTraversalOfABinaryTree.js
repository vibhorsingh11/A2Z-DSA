/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  //node with (vertical & level)
  let map = new Map();
  let queue = [];
  //initial vertical & level
  queue.push([root, [0, 0]]);

  while (queue.length > 0) {
    let [curr, [x, y]] = queue.shift();
    if (!map.has(x)) {
      map.set(x, []);
    }
    // Push the node with its level
    map.get(x).push([y, curr.val]);
    if (curr.left) queue.push([curr.left, [x - 1, y + 1]]);
    if (curr.right) queue.push([curr.right, [x + 1, y + 1]]);
  }
  const res = [];
  //making a copy and then sorting wrt key i.e. (x)
  for (const [key, value] of [...map].sort(([a], [b]) => a - b)) {
    // Sort the nodes by level (y-axis), and then by value
    value.sort(([y1, val1], [y2, val2]) => {
      if (y1 !== y2) return y1 - y2;
      return val1 - val2;
    });
    // Extract the sorted node values
    res.push(value.map(([y, val]) => val));
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
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(6);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

console.log(verticalTraversal(root)); //[[4], [2], [1, 5, 6], [3], [7]]

// Time Complexity: O(NlogN)
// Space Complexity: O(N)
