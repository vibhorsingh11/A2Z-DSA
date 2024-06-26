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

function reverseDLL(head) {
  if (head === null || head.next === null) return head;

  let curr = head;
  let prev = null;
  let next = null;

  while (curr !== null) {
    // Adjust pointers to reverse the links
    next = curr.next;
    curr.next = prev;
    curr.back = next;

    // Move to the next node
    prev = curr;
    curr = next;
  }

  // prev is now the new head of the reversed list
  return prev;
}

let arr = [12, 5, 8, 7];
let head = convertToDLL(arr);
head = reverseDLL(head);
print(head);
