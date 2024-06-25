class Node {
  constructor(data, next, back) {
    this.data = data;
    this.next = next;
    this.back = back;
  }
}

function convertToDLL(arr) {
  let head = new Node(arr[0]);
  let prev = head;

  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i], null, prev);
    prev.next = temp;
    prev = temp;
  }
  return head;
}

function print(head) {
  while (head !== null) {
    console.log(head.data + ' ');
    head = head.next;
  }
  console.log();
}

function deleteHead(head) {
  if (head === null || head.next === null) return null;

  let prev = head;
  head = head.next;

  head.back = null;
  prev.next = null;
  return head;
}

function deleteTail(head) {
  if (head === null || head.next === null) return null;

  let tail = head;
  while (tail.next != null) {
    tail = tail.next;
  }
  prev = tail.back;
  prev.next = null;
  tail.back = null;
  return head;
}

//k is betwween 1 and length of LL
function deleteKthElement(head, k) {
  if (head === null) return null;

  let count = 0;
  let kNode = head;
  while (kNode !== null) {
    count++;
    if (count === k) break;
    kNode = kNode.next;
  }

  let prev = kNode.back;
  let front = kNode.next;
  if (prev === null && front === null) {
    return null;
  } else if (prev === null) {
    return deleteHead(head);
  } else if (front === null) {
    return deleteTail(head);
  }
  prev.next = front;
  front.back = prev;

  kNode.next = null;
  kNode.back = null;

  return head;
}

function deleteNode(temp) {
  let prev = temp.back;
  let front = temp.next;

  if (front === null) {
    prev.next = null;
    temp.back = null;
    return;
  }
  prev.next = front;
  front.back = prev;

  temp.next = temp.back = null;
}

let arr = [12, 5, 8, 7];
let head = convertToDLL(arr);
// head = deleteTail(head);
// head = deleteKthElement(head, 2)
deleteNode(head.next);
print(head);
