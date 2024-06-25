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

function insertBeforeHead(head, val) {
  let newHead = new Node(val, head, null);
  head.back = newHead;

  return newHead;
}

function insertBeforeTail(head, val) {
  if (head.next === null) {
    return insertBeforeHead(head, val);
  }
  let tail = head;
  while (tail.next != null) {
    tail = tail.next;
  }
  let prev = tail.back;
  let newTail = new Node(val, tail, prev);

  prev.next = newTail;
  tail.back = newTail;
  return head;
}

function insertBeforeKthElement(head, val, k) {
  if (k === 1) {
    return insertBeforeHead(head, val);
  }

  let temp = head,
    count = 0;
  while (temp !== null) {
    count++;
    if (count === k) break;
    temp = temp.next;
  }
  prev = temp.back;
  let newNode = new Node(val, temp, prev);
  prev.next = newNode;
  temp.back = newNode;
  return head;
}

function insertBeforeNode(node, val) {
  let prev = node.back;
  let newNode = new Node(val, node, prev);
  prev.next = newNode;
  node.back = newNode;
}

let arr = [12, 5, 8, 7];
let head = convertToDLL(arr);
head = insertBeforeTail(head, 100);
head = insertBeforeKthElement(head, 200, 3);
insertBeforeNode(head.next, 250);
print(head);
