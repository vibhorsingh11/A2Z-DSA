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

console.log('Linked List ' + head.val);

function llLength(head) {
  let curr = head;
  let count = 0;

  while (curr !== null) {
    curr = curr.next;
    count++;
  }
  return count;
}

console.log('LL length ' + llLength(head));

function searchLL(head, target) {
  let curr = head;

  while (curr !== null) {
    if (curr.val === target) {
      return true;
    }
    curr = curr.next;
  }
  return false;
}

console.log(searchLL(head, 6));
