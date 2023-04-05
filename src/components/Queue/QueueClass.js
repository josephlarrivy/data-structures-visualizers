class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }

  getAsArray() {
    let arr = []
    for (let item of this.items) {
      arr.push(item)
    }
    return arr
  }

  getAsReverseArray() {
    let arr = []
    for (let i=this.items.length-1; i>=0; i--) {
      arr.push(this.items[i])
    }
    return arr
  }
}

export default Queue;