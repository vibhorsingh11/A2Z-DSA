class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null && headB === null) return null;
  let list1 = headA,
    list2 = headB;
  while (list1 !== list2) {
    if (list1 === null) list1 = headB;
    if (list2 === null) list2 = headA;
    if (list1 === list2) return list1;
    list1 = list1.next;
    list2 = list2.next;
  }
  return list1;
};

const head = new Node(4);
head.next = new Node(1);
head.next.next = new Node(8);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const head2 = new Node(5);
head2.next = new Node(6);
head2.next.next = new Node(1);
head2.next.next = head.next.next;

console.log(getIntersectionNode(head, head2));

//TC: O(N1 + N2),     SC:(1)
