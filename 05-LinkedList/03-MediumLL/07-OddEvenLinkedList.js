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
var oddEvenList = function (head) {
  if (head === null || head.next === null) return head;
  let odd = head,
    even = head.next,
    evenHead = head.next;
  while (even !== null && even.next !== null) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    odd = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(oddEvenList(head));

//TC: O(N/2) * 2 ~= O(N),     SC: O(1)
