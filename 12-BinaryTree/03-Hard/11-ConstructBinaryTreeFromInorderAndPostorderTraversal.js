/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const map = new Map();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  return helper(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1,
    map
  );
};

function helper(inorder, inStart, inEnd, postorder, postStart, postEnd, map) {
  if (inStart > inEnd || postStart > postEnd) return null;

  let root = new TreeNode(postorder[postEnd]);
  //get the index of root from inorder array
  let inRoot = map.get(postorder[postEnd]);
  //number of nodes in left subtree
  let numsLeft = inRoot - inStart;

  root.left = helper(
    inorder,
    inStart,
    inRoot - 1,
    postorder,
    postStart,
    postStart + numsLeft - 1,
    map
  );
  root.right = helper(
    inorder,
    inRoot + 1,
    inEnd,
    postorder,
    postStart + numsLeft,
    postEnd - 1,
    map
  );
  return root;
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];

console.log(buildTree(inorder, postorder));

//TC: O(N)
//SC: O(N)
