class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (list1, list2) {
  let dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;
  let l1 = list1,
    l2 = list2;
  while (l1 || l2 || carry != 0) {
    let sum = carry;
    if (l1) sum += l1.val;
    if (l2) sum += l2.val;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  return dummy.next;
};

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(3);

const head2 = new Node(5);
head2.next = new Node(6);
head2.next.next = new Node(4);

console.log(addTwoNumbers(head, head2));

//TC: O(max(m, n)),    SC: O(max(m,n))
