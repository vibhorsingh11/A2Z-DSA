/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null || q === null) {
    return p === q;
  }
  let left = isSameTree(p.left, q.left);
  let right = isSameTree(p.right, q.right);
  //check if the values are same and the left and right subtrees are same
  //both left and right are true
  return p.val === q.val && left && right;
};

//TC: O(N)
//SC: O(N)

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

let q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);

console.log(isSameTree(p, q)); //true
