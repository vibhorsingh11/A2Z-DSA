class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  insertCopyInBetween(head);
  connectRandomPointers(head);
  return getDeepCopyList(head);
};

function insertCopyInBetween(head) {
  let temp = head;
  while (temp !== null) {
    let nextNode = temp.next;
    let copyNode = new Node(temp.val);
    copyNode.next = nextNode;
    temp.next = copyNode;
    temp = nextNode;
  }
}

function connectRandomPointers(head) {
  let temp = head;
  while (temp !== null) {
    let copyNode = temp.next;
    if (temp.random) {
      copyNode.random = temp.random.next;
    } else {
      copyNode.random = null;
    }
    temp = temp.next.next;
  }
}

function getDeepCopyList(head) {
  let temp = head;
  let dummyNode = new Node(-1);
  let res = dummyNode;
  while (temp !== null) {
    //new list
    res.next = temp.next;
    res = res.next;
    //disconnect and connecting in
    //initial state
    temp.next = temp.next.next;
    temp = temp.next;
  }
  return dummyNode.next;
}

let head = new Node(7);
head.random = null;
head.next = new Node(13);
head.next.random = head;
head.next.next = new Node(11);
head.next.next = head.next.next.next.next;
head.next.next.next = new Node(10);
head.next.next.next = head.next.next;
head.next.next.next.next = head;

console.log(copyRandomList(head));

//TC: O(3N)
//SC: O(N)
