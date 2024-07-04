class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.child = null;
  }
}

//O(N + M)
function merge(list1, list2) {
  let dummyList = new Node(-1);
  let res = dummyList;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      res.child = list1;
      res = list1;
      list1 = list1.child;
    } else {
      res.child = list2;
      res = list2;
      list2 = list2.child;
    }
    res.next = null;
  }
  if (list1 !== null) res.child = list1;
  if (list2 !== null) res.child = list2;
  if (dummyList.child) dummyList.child.next = null;
  return dummyList.child;
}

function flatteningLL(head) {
  if (head === null || head.next === null) return head;
  let mergedList = flatteningLL(head.next);
  head = merge(head, mergedList);
  return head;
}

let head = new Node(5);
head.child = new Node(7);
head.child.child = new Node(8);
head.child.child.child = new Node(30);
head.next = new Node(10);
head.next.child = new Node(20);
head.next.next = new Node(19);
head.next.next.child = new Node(22);
head.next.next.child.child = new Node(50);
head.next.next.next = new Node(28);
head.next.next.next.child = new Node(35);
head.next.next.next.child.child = new Node(40);
head.next.next.next.child.child.child = new Node(45);

console.log(flatteningLL(head).child);

//TC: O(N) x O(2M) ~= O(2MN)
//SC: O(N)  ~= recurssion stack
