class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head === null || head.next === null) return head;

  let middle = findMiddle(head);
  let right = middle.next;
  middle.next = null;
  let left = head;

  left = sortList(left);
  right = sortList(right);
  return mergeSortList(left, right);
};

function findMiddle(head) {
  if (head === null || head.next === null) return head;
  let slow = head,
    fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function mergeSortList(list1, list2) {
  let dummyNode = new ListNode(-1);
  let temp = dummyNode;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      temp.next = list1;
      temp = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      temp = list2;
      list2 = list2.next;
    }
  }
  if (list1) {
    temp.next = list1;
  } else {
    temp.next = list2;
  }
  return dummyNode.next;
}

const head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = new Node(7);
head.next.next.next.next = new Node(1);
head.next.next.next.next.next = new Node(2);
head.next.next.next.next.next.next = new Node(6);

console.log(sortList(head)); //[1,1,2,3,4,6,7]

//TC: O(logN * (N + N/2)),   SC: O(1)
