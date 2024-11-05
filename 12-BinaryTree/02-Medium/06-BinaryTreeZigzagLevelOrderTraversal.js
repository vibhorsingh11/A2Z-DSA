/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let res = [];
  if (root === null) return res;
  let queue = [];
  queue.push(root);
  //L->R
  let flag = true;

  while (queue.length > 0) {
    let size = queue.length;
    let temp = new Array(size);

    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      //true insert it from front else back
      let index = flag ? i : size - 1 - i;
      temp[index] = curr.val;
      if (curr.left !== null) queue.push(curr.left);
      if (curr.right !== null) queue.push(curr.right);
    }
    flag = !flag;
    res.push(temp);
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

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(zigzagLevelOrder(root)); //[[3],[20,9],[15,7]]

//TC: O(N)
//SC: O(N)
