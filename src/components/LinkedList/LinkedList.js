class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  insert(index, value) {
    if (index < 0) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      return this.prepend(value);
    } else if (index === this.length) {
      return this.append(value);
    } else if (index > this.length) {
      return this.append(value);
    } else {
      const newNode = new Node(value);
      let node = this.head;
      for (let i = 0; i < index - 1; i++) {
        node = node.next;
      }
      newNode.next = node.next;
      node.next = newNode;
      this.length++;
      return this;
    }
  }

  remove(index) {
    if (index < 0 || index > this.length -1) {
      throw new Error("Index out of bounds");
    }
    let node = this.head;
    if (index === 0) {
      this.head = node.next;
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      for (let i = 0; i < index - 1; i++) {
        node = node.next;
      }
      const removedNode = node.next;
      node.next = removedNode.next;
      if (index === this.length - 1) {
        this.tail = node;
      }
    }
    this.length--;
    return this;
  }

  toArray() {
    const values = [];
    let node = this.head;
    while (node) {
      values.push(node.value);
      node = node.next;
    }
    return values;
  }

  getNodesAsObjects() {
    const vals = [];
    let node = this.head;
    while(node) {
      if (this.length === 1) {
        vals.push(
          {
            'head': true,
            'tail': true,
            'value': node.value,
            'next': null,
          }
        );
        return vals;
      } else if (node === this.head) {
        vals.push(
          {
            'head': true,
            'tail': false,
            'value': node.value,
            'next': node.next.value,
          }
        );
      } else if (node === this.tail) {
        vals.push(
          {
            'head': false,
            'tail': true,
            'value': node.value,
            'next': 'null',
          }
        );
      } else {
        vals.push(
          {
            'head': false,
            'tail': false,
            'value': node.value,
            'next': node.next.value,
          }
        );
      }
      node = node.next;
    }
    return vals;
  }
}

export default LinkedList;