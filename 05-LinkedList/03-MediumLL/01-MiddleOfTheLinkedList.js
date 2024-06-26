class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const middleNodeFun = middleNode(head);
console.log(middleNodeFun.data);

//TC: O(n/2),   SC: O(1)
