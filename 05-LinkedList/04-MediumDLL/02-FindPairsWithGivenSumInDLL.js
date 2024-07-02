class Node {
  constructor(val, next, prev) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

function findTail(head) {
  let tail = head;
  while (tail.next !== null) tail = tail.next;
  return tail;
}
function findPairsWithGivenSum(head, k) {
  let left = head;
  right = findTail(head); //O(N)
  let arr = [];

  while (left.val < right.val) {
    let sum = left.val + right.val;
    if (sum === k) {
      arr.push(left.val, right.val);
      left = left.next;
      right = right.prev;
    } else if (sum < k) {
      left = left.next;
    } else {
      right = right.prev;
    }
  }

  return arr;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(9);

console.log(findPairsWithGivenSum(head, 6));

//TC: O(2N)
