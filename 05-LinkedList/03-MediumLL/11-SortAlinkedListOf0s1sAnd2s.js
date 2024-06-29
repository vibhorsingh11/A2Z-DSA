class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
function segregate(head) {
  let zeroHead = new Node(-1);
  let oneHead = new Node(-1);
  let twoHead = new Node(-1);
  let zero = zeroHead,
    one = oneHead,
    two = twoHead;

  let temp = head;
  while (temp) {
    if (temp.val === 0) {
      zero.next = temp;
      zero = temp;
    } else if (temp.val === 1) {
      one.next = temp;
      one = temp;
    } else {
      two.next = temp;
      two = temp;
    }
    temp = temp.next;
  }
  zero.next = oneHead ? oneHead.next : twoHead.next;
  one.next = twoHead.next;
  twoHead.next = null;
  return zeroHead.next;
}

//[1,2,2,1,2,0,2,2]
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(1);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(0);
head.next.next.next.next.next.next = new Node(2);
head.next.next.next.next.next.next.next = new Node(2);

console.log(segregate(head).next);

//TC: O(N),     SC:(1)
