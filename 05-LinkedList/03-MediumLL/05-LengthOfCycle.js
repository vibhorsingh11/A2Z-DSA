class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

var detectCycle = function (head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let count = 2;
      fast = fast.next;
      while (slow !== fast) {
        count++;
        fast = fast.next;
      }
      return count;
    }
  }
  return 0;
};

//25,14,19,33,10,21,39,90,58,45
const head = new Node(25);
head.next = new Node(14);
head.next.next = new Node(19);
head.next.next.next = new Node(33);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(21);
head.next.next.next.next.next.next = new Node(39);
head.next.next.next.next.next.next.next = new Node(90);
head.next.next.next.next.next.next.next.next = new Node(58);
head.next.next.next.next.next.next.next.next.next = new Node(45);
head.next.next.next.next.next.next.next.next.next = head.next.next.next;

console.log(detectCycle(head));

//TC: O(N),    SC: O(1)
