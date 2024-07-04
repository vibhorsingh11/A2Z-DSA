class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.back = null;
  }
}

class Browser {
  constructor(homepage) {
    this.currentPage = new Node(homepage);
  }

  visit(url) {
    let newNode = new Node(url);
    this.currentPage.next = newNode;
    newNode.back = this.currentPage;
    this.currentPage = newNode;
  }

  back(steps) {
    while (steps) {
      if (this.currentPage.back) {
        this.currentPage = this.currentPage.back;
      } else {
        break;
      }
      steps--;
    }
    return this.currentPage.val;
  }

  forward(steps) {
    while (steps) {
      if (this.currentPage.next) {
        this.currentPage = this.currentPage.next;
      } else {
        break;
      }
      steps--;
    }
    return this.currentPage.val;
  }
}

const browser = new Browser('leetcode.com');
browser.visit('facebook.com');
browser.visit('amazon.com');
browser.visit('google.com');
console.log(browser.back(1));
console.log(browser.forward(1));

//TC: for back/forward operation it will be O(steps)
