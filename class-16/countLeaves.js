class Tree {
  constructor() {
    this.root = null;
    // this.height = 0;
    // this.leaves = 0;
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null;
    this.right = null;
  }
}

// if this function gets called over and over

// if we use recusion from within our function

function countLeaves(root, count) {

  let countLeft = 0;
  let countRight = 0;

  // check for root.left and root.right
  // if none, we have a leaf
  if (!root.left && !root.right) {
    console.log('add one');
    count += 1;
  }

  // if there is a root.left
  // call function on root.left
  if (root.left) {
    // countLeft += countLeaves(root.left, count);
    count += countLeaves(root.left, 0);
  }

  // if there is a root.right
  // call function on root.right
  if (root.right) {
    // countRight += countLeaves(root.left, count);
    count += countLeaves(root.right, 0);
  }
  // count += countLeft + countRight;

  return count;
}

const tree = new Tree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.right = new Node(4);
tree.root.left.left = new Node(5);

console.log(countLeaves(tree.root, 0));