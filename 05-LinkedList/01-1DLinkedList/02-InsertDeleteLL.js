class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function convertArrToLL(arr) {
  let head = new Node(arr[0]);
  let mover = head;

  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp;
    mover = temp;
  }
  return head;
}

let arr = [12, 5, 6, 8];
let head = convertArrToLL(arr);

function deleteLLNode(head, k) {
  if (head === null) return null;
  if (k === 1) return (head = head.next);
  let count = 0;
  let curr = head;
  let prev = null;

  while (curr !== null) {
    count++;
    if (count === k) {
      prev.next = prev.next.next;
      break;
    }
    prev = curr;
    curr = curr.next;
  }
  return head;
}

console.log(deleteLLNode(head, 2));

function insertNode(head, val, k) {
  if (head === null) {
    if (k === 1) {
      return new Node(val);
    }
    return null;
  }

  let curr = head;
  let count = 0;

  while (curr != null) {
    count++;
    if (count === k - 1) {
      let temp = new Node(val);
      temp.next = curr.next;
      curr.next = temp;
      break;
    }
    curr = curr.next;
  }
  return head;
}

console.log(insertNode(head, 100, 2));
