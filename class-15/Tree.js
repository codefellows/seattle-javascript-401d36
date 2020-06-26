class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder(root) {

    console.log(root.value);

    if (root.left !== null) {
      this.preOrder(root.left)
    }
    if (root.right !== null) {
      this.preOrder(root.right);
    }
  }

  inOrder(root) {

    if (root.left !== null) {
      this.inOrder(root.left);
    }

    console.log(root.value);

    if (root.right !== null) {
      this.inOrder(root.right);
    }
  }

  postOrder(root) {

    if (root.left !== null) {
      this.postOrder(root.left)
    }

    if (root.right !== null) {
      this.postOrder(root.right);
    }

    console.log(root.value);
  }

}

let tree = new Tree();

tree.root = new Node(1);
tree.root.left = new Node(3);
tree.root.right = new Node(2);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

// tree.preOrder(tree.root);
tree.inOrder(tree.root);