class MyQueue {
  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stackIn.push(x);
  }
  /**
   * @return {number}
   */
  pop() {
    if (this.stackOut.length === 0) {
      while (this.stackIn.length) {
        this.stackOut.push(this.stackIn.pop());
      }
    }
    return this.stackOut.pop();
  }
  /**
   * @return {number}
   */
  peek() {
    if (this.stackOut.length === 0) {
      while (this.stackIn.length) {
        this.stackOut.push(this.stackIn.pop());
      }
    }
    return this.stackOut[this.stackOut.length - 1];
  }
  /**
   * @return {boolean}
   */
  empty() {
    return this.stackOut.length === 0 && this.stackIn.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
