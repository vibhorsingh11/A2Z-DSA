var StockSpanner = function () {
  this.st = []; // stack to hold price and index pairs
  this.ind = -1; // index to track the current position
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.ind++;

  // Pop from stack while the current price is greater than or equal to the price at the top of the stack
  while (this.st.length > 0 && this.st[this.st.length - 1][0] <= price) {
    this.st.pop();
  }

  // Calculate the answer based on whether the stack is empty or not
  const ans =
    this.st.length === 0
      ? this.ind + 1
      : this.ind - this.st[this.st.length - 1][1];

  // Push the current price and index onto the stack
  this.st.push([price, this.ind]);

  return ans;
};

//TC: O(2N)
//SC: O(N)

//Your StockSpanner object will be instantiated and called as such:
var obj = new StockSpanner();
console.log(obj.next(100));
console.log(obj.next(80));
console.log(obj.next(60));
console.log(obj.next(70));
console.log(obj.next(60));
console.log(obj.next(75));
console.log(obj.next(85));
