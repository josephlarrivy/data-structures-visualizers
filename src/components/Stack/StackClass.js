class StackClass {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }

  getFullStack() {
    if (this.items.isEmpty) {
      return []
    } else {
      let fullStack = [];
      for (let i = this.items.length; i > 0; i--) {
        fullStack.push(this.items[i]
        )
      }
      return fullStack
    }
  }
}


export default StackClass;

// const myStack = new Stack();

// myStack.push(1);
// myStack.push(2);
// myStack.push(3);

// console.log(myStack.printStack()); // Output: "1 2 3"

// myStack.pop();
// console.log(myStack.printStack()); // Output: "1 2"