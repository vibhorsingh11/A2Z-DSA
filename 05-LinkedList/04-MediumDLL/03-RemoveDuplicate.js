class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

function removeDuplicates(head) {
  let temp = head;
  while (temp !== null && temp.next !== null) {
    let nextNode = temp.next;
    while (nextNode !== null && nextNode.val === temp.val) {
      nextNode = nextNode.next;
    }
    temp.next = nextNode;
    if (nextNode) nextNode.prev = temp;
    temp = temp.next;
  }
  return head;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(3);
head.next.next.next.next.next = new Node(4);
head.next.next.next.next.next.next = new Node(4);

console.log(removeDuplicates(head));

//TC: O(N) outer loop is 4 and inner is 3
