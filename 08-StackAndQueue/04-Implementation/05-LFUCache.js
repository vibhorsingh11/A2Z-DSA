class DLLNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.frequency = 1;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.listSize = 0;
    this.head = new DLLNode(0, 0);
    this.tail = new DLLNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addNode(node) {
    const nextNode = this.head.next;
    node.next = nextNode;
    node.prev = this.head;
    this.head.next = node;
    nextNode.prev = node;
    this.listSize++;
  }

  removeNode(node) {
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.listSize--;
  }
}

class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.curSize = 0;
    this.minFrequency = 0;
    //Maps keys to their corresponding DLLNode
    this.cache = new Map();
    //Maps frequencies to their corresponding DoublyLinkedList of nodes
    this.frequencyMap = new Map();
  }

  get(key) {
    const node = this.cache.get(key);
    if (!node) {
      return -1;
    }
    this.updateNode(node);
    return node.value;
  }

  put(key, value) {
    if (this.capacity === 0) {
      return;
    }

    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this.updateNode(node);
    } else {
      this.curSize++;
      if (this.curSize > this.capacity) {
        const minFreqList = this.frequencyMap.get(this.minFrequency);
        this.cache.delete(minFreqList.tail.prev.key);
        minFreqList.removeNode(minFreqList.tail.prev);
        this.curSize--;
      }

      this.minFrequency = 1;
      const newNode = new DLLNode(key, value);
      const freqList = this.frequencyMap.get(1) || new DoubleLinkedList();
      freqList.addNode(newNode);
      this.frequencyMap.set(1, freqList);
      this.cache.set(key, newNode);
    }
  }

  updateNode(node) {
    const curFreq = node.frequency;
    const curList = this.frequencyMap.get(curFreq);
    curList.removeNode(node);

    if (curFreq === this.minFrequency && curList.listSize === 0) {
      this.minFrequency++;
    }

    node.frequency++;
    const newList =
      this.frequencyMap.get(node.frequency) || new DoubleLinkedList();
    newList.addNode(node);
    this.frequencyMap.set(node.frequency, newList);
  }
}

// Usage
const lfu = new LFUCache(2);
lfu.put(1, 1); // cache=[1,_], cnt(1)=1
lfu.put(2, 2); // cache=[2,1], cnt(2)=1, cnt(1)=1
console.log(lfu.get(1)); // return 1, cache=[1,2], cnt(2)=1, cnt(1)=2
lfu.put(3, 3); // 2 is the LFU key, cache=[3,1], cnt(3)=1, cnt(1)=2
console.log(lfu.get(2)); // return -1 (not found)
console.log(lfu.get(3)); // return 3, cache=[3,1], cnt(3)=2, cnt(1)=2
lfu.put(4, 4); // 1 is LRU, cache=[4,3], cnt(4)=1, cnt(3)=2
console.log(lfu.get(1)); // return -1 (not found)
console.log(lfu.get(3)); // return 3, cache=[3,4], cnt(4)=1, cnt(3)=3
console.log(lfu.get(4)); // return 4, cache=[4,3], cnt(4)=2, cnt(3)=3
