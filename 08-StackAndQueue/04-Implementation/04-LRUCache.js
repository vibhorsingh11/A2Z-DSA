class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    const node = this.map.get(key);
    if (!node) return -1;
    this.deleteNode(node);
    this.addNodeAfterHead(node);
    return node.val;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.deleteNode(this.map.get(key));
    }
    if (this.capacity === this.map.size) {
      this.deleteNode(this.tail.prev);
    }
    this.addNodeAfterHead(new Node(key, value));
  }

  addNodeAfterHead(newNode) {
    this.map.set(newNode.key, newNode);
    const temp = this.head.next;
    newNode.next = temp;
    newNode.prev = this.head;
    this.head.next = newNode;
    temp.prev = newNode;
  }

  deleteNode(delNode) {
    this.map.delete(delNode.key);
    const delPrev = delNode.prev;
    const delNext = delNode.next;
    delPrev.next = delNext;
    delNext.prev = delPrev;
  }
}

// Usage
const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache.get(1)); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2)); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1)); // return -1 (not found)
console.log(lRUCache.get(3)); // return 3
console.log(lRUCache.get(4)); // return 4
