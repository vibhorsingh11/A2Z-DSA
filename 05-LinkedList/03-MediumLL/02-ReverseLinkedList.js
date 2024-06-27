/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) return head;

  let curr = head;
  let prev = null;
  while (curr) {
    let front = curr.next;
    curr.next = prev;
    prev = curr;
    curr = front;
  }
  return prev;
};

//TC: O(N),  SC: O(1)

var reverseList = function (head) {
  if (head === null || head.next === null) return head;

  let newHead = reverseList(head.next);
  let front = head.next;
  front.next = head;
  head.next = null;
  return newHead;
};

//TC: O(N),    SC: O(N)
