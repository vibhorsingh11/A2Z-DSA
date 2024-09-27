class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.item.lenght === 0;
  }

  size() {
    return this.items.length;
  }

  printStack() {
    let str = '';
    for (let item of this.items) {
      str += item + '';
    }
    return str;
  }
}

let stack = new Stack();
stack.push(2);
stack.push(3);
stack.pop();

console.log(stack.printStack());

//TC & SC :O(n)
