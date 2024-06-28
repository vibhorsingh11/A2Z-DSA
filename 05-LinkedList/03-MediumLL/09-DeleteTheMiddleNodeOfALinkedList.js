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
var deleteMiddle = function (head) {
  if (head === null || head.next === null) return null;
  let slow = head,
    fast = head;
  //skip first slow step
  fast = fast.next.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let midNode = slow.next;
  slow.next = slow.next.next;
  midNode = null;
  return head;
};

const head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = new Node(7);
head.next.next.next.next = new Node(1);
head.next.next.next.next.next = new Node(2);
head.next.next.next.next.next.next = new Node(6);

console.log(deleteMiddle(head)); //[1,3,4,1,2,6]

//TC: O(N/2),   SC: O(1)
