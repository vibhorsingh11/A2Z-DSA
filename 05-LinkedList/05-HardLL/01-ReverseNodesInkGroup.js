class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function findKNode(temp, k) {
  k -= 1;
  while (temp !== null) {
    k--;
    temp = temp.next;
  }
  return temp;
}

function reverseLL(head) {
  if (head === null) return head;
  let temp = head,
    prev = null;

  while (temp !== null) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
}

/**
 * @param {Node} head
 * @param {number} k
 * @return {Node}
 */
var reverseKGroup = function (head, k) {
  let temp = head;

  while (temp !== null) {
    let kNode = findKNode(temp, k);
    if (kNode === null) {
      if (prev) prev.next = temp;
      break;
    }
    let nextNode = kNode.next;
    kNode.next = null;
    reverseLL(temp);
    if (temp === head) {
      head = kNode;
    } else {
      prev.next = kNode;
    }
    prev = temp;
    temp = nextNode;
  }
  return head;
};

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(removeDuplicates(head, 2)); //[2,1,4,3,5]

//TC: O(2N), SC: O(1)
