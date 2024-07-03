class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head === null || k === 0) return head;
  let tail = head;
  let len = 1;
  while (tail.next !== null) {
    len++;
    tail = tail.next;
  }
  if (k % len === 0) return head;
  k = k % len;
  tail.next = head;
  let newTail = findNthNode(head, len - k);

  head = newTail.next;
  newTail.next = null;
  return head;
};

function findNthNode(temp, k) {
  let count = 1;
  while (temp !== null) {
    if (count === k) return temp;
    count++;
    temp = temp.next;
  }
  return temp;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(removeDuplicates(head, 2)); //[4,5,1,2,3]

//TC: O(2N), SC: O(1)
