class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let slow = head,
    fast = head;
  let count = 0;
  while (count < n) {
    fast = fast.next;
    count++;
  }
  slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  if (fast === null) {
    return head.next;
  }
  let nNode = slow.next;
  slow.next = slow.next.next;
  nNode = null;
  return head;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(removeNthFromEnd(head, 2));

//TC: O(length of LL),     SC: O(1)
