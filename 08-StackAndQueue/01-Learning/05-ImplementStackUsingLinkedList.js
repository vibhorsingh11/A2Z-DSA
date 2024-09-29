class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(x) {
    const newNode = new Node(x);
    if (this.size > 0) {
      newNode.next = this.top;
    }
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.size === 0) return null;
    const poppedValue = this.top.val;
    this.top = this.top.next;
    this.size--;
    return poppedValue;
  }

  peek() {
    return this.size === 0 ? null : this.top.val;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); //  3
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.isEmpty()); // false
console.log(stack.getSize()); // 1
