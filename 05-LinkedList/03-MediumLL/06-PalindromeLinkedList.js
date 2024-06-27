class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) return head;

  let slow = head,
    fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //reverse second half
  let newHead = reverseList(slow.next);

  let first = head,
    second = newHead;
  while (second !== null) {
    if (first.val !== second.val) {
      reverseList(newHead);
      return false;
    }
    first = first.next;
    second = second.next;
  }
  reverseList(newHead);
  return true;
};

//Reverse LL
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

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(1);

console.log(isPalindrome(head));

//TC: O(2N),    SC: O(1)
