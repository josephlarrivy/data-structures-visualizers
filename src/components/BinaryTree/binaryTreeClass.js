class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addNode(value) {
    const node = new BinaryTreeNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      } else {
        return; // value already exists in the tree
      }
    }
  }

  findNode(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return current;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null; // value not found in the tree
  }

  removeNode(value) {
    const remove = (node, value) => {
      if (!node) {
        return null;
      }
      if (value === node.value) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        let temp = node.right;
        while (temp.left) {
          temp = temp.left;
        }
        node.value = temp.value;
        node.right = remove(node.right, temp.value);
        return node;
      }
      if (value < node.value) {
        node.left = remove(node.left, value);
        return node;
      }
      node.right = remove(node.right, value);
      return node;
    };
    this.root = remove(this.root, value);
  }

  traverseInOrder(callback) {
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      callback(node);
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
  }

  traversePreOrder(callback) {
    const traverse = (node) => {
      callback(node);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
  }

  traversePostOrder(callback) {
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      callback(node);
    };
    traverse(this.root);
  }
}
