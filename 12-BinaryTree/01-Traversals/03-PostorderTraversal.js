/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = [];

  function helper(root) {
    if (root === null) return;
    helper(root.left);
    helper(root.right);
    res.push(root.val);
  }

  helper(root);
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
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(postorderTraversal(root)); // [3,2,1]

//TC: O(N)
//SC: O(N)

//Alternate solution using iterative approach

var postorderTraversal = function (root) {
  let res = [];
  if (root === null) return res;
  let stack = [];
  let curr = root;

  while (curr !== null || stack.length > 0) {
    if (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    } else {
      //check if the right node is null
      let temp = stack[stack.length - 1].right;
      if (temp === null) {
        //go back to parent and pop
        temp = stack.pop();
        res.push(temp);
        while (stack.length > 0 && temp === stack[stack.length - 1].right) {
          //go back to parent and pop
          temp = stack.pop();
          //push the parent to the result
          res.push(temp);
        }
      } else {
        //move to the right node
        curr = temp;
      }
    }
  }
  return res;
};
