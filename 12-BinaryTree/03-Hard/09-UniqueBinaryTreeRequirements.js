//Each traversal is represented with an integer: preorder - 1, inorder - 2, postorder - 3.

function isPossible(a, b) {
  if ((a == 2 && b != 2) || (b == 2 && a != 2)) return true;
  return false;
}

console.log(isPossible(1, 2)); //true
