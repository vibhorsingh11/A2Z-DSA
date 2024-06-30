class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

function helper(temp) {
  if (temp === null) return 1;
  let carry = helper(temp.next);
  temp.val += carry;
  if (temp.val < 10) {
    return 0;
  }
  temp.val = 0;
  return 1;
}
var addOne = function (head) {
  let carry = helper(head);
  if (carry === 1) {
    let newHead = new Node(1);
    newHead.next = head;
    head = newHead;
  }
  return head;
};

const head = new Node(4);
head.next = new Node(5);
head.next.next = new Node(6);

console.log(addOne(head));

//TC: O(N),     SC:(1)
