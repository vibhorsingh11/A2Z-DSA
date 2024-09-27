class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) return -1;
    return this.items.shift();
  }

  front() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printQueue() {
    return this.items.join(' ');
  }
}

let queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(66);
console.log(queue.front());
queue.dequeue();
console.log(queue.printQueue());
