class Node {
  constructor(val, next, prev) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}
function deleteAll(head, k) {
  let temp = head;
  while (temp !== null) {
    if (temp.val === k) {
      //if head
      if (temp === head) {
        head = head.next;
      }
      let nextNode = temp.next;
      let prevNode = temp.prev;
      if (nextNode !== null) nextNode.prev = prevNode;
      if (prevNode !== null) prevNode.next = nextNode;
      temp = nextNode;
    } else {
      temp = temp.next;
    }
  }
  return head;
}

let head = new Node(10);
head.next = new Node(4);
head.next.next = new Node(10);
head.next.next.next = new Node(10);
head.next.next.next.next = new Node(6);
head.next.next.next.next.next = new Node(10);

console.log(deleteAll(head, 10));

//TC: O(N),    SC: O(1)
