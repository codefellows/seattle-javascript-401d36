# Career Coaching

## Job Titles

- What are the job titles to look for, decrypting a job title
  - Junior
    - You'll mostly be doing prescribed, show and replicate.
    - You'll be with someone who wants to teach you how they do things.
  - Developer / Engineer
    - You're pubishing your own code that you write.
    - Sales Engineer??
    - Success Engineer?
      - Evengilism.
      - Publishing code directly for spcific solutions.
  - Designer
    - You might be publishing, you're probably focused more on high level abstraction.
    - Typically focuses User Interfaces and aesthics ( how does this make people feel ).
  - Manager
    - Managing others.
  - UI / UX ( user interface / user experience )
    - Your going to work with a lot of frameworks, and most likely be working with a lot of HTML , CSS, and JS.
    - Often means working with customers.
  - Technical Recruiter  / Software Recruiter.
    - Software recruiter is probably also a tech recruiter.
    - Tech recruiter could possibly be doing other.
  - Dev Ops
    - These folks are quite technical, but not always engineering / software.
  - Product Manager??

Networking?
- My network isn't supporting me.


## Trees

## What is a tree?

- A data structure made up of nodes, nodes now have mutliple references to other nodes ( while linked lists type styrcutes only have one ).

- Visualize
  - See image folder.

- Terminology
  - Node: Now this has at least 2 other references.
  - Root: Top most node. No other node is referencing it. ( just like top / head / front / rear )
  - LeftChild: The node to the left of the current (root) node.
  - RightChild: the node to the right of the current (root) node.
  - Edge: a connection between 2 nodes.
  - Leaf: a node that does not have any children.
  - Height: The number of edges form the root, to the furthest leaf.

## Traversals

- Looking at everything in a tree.
- Depth first: we travel down the tree before all the nodes at a current level.
  - Pre-order: root -> left.node -> right.node
  - In-order: left.node -> root -> right.node
  - Post-order: left.node -> right.node -> root
    - the very bottom goes first
- Breadth first: Looking at current level nodes, before moving to children.

## Algorithms

- Often times we use the call stack to provide an order for functions to run, using recursion:
  - A function that calls itself.
  - This creates a set of identical function calls in our callstack.
    - FILO: function2 -> function1
    - When we return an actual value, that a recursuve call, we pop all of our functino frames our of the stack.
  - We need to think of two options
    - Base case: The operations to need to stop your function calls.
    - Recursive case: the operations you want to run recursively.
  - Recursion is really expensive from a resource perspective.

```js

// let count = 0;

function counts(num) {
  let count = num;

  // recusive case
  while (count < 10) {
    console.log(count);
    count += 1;
    return counts(count);
  }

  // base case
  return true;
}

counts(0);

```

- Pre-order algorithm:

```java

ALGORITHM PreOrder(root)

  OUTPUT => root.value

  if root.left is not null
    preOrder(root.left)

  if root.right is not null
    preOrder(root.right)

```

- In-Order algorithm

```js

ALGORITHM InOrder(root)

  if root.left is not null
    preOrder(root.left)

  OUTPUT => root.value

  if root.right is not null
    preOrder(root.right)

```

- Post-Order algorithm

```js

ALGORITHM InOrder(root)

  if root.left is not null
    preOrder(root.left)

  if root.right is not null
    preOrder(root.right)
  
  OUTPUT => root.value

```

- breadth-first traversal:
  - Uses a queue system to order node output, an enqueueing the nodes children.

```js

ALGORITHM BreadthFirst

  Queue => new Queue
  Queue.enqueue(root)

  while Queue is not empty
    Node = Queue.dequeue();
    OUTPUT => Node.value

    if Node.left is not null
      Queue.enqueue(Node.left)

    if Node.right is not null
      Queue.enqueu(Node.right);


```

## Implementation

```js

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

  // traverse our tree starting at the root, going in pre-order

// ALGORITHM InOrder(root)

//   if root.left is not null
//     preOrder(root.left)

//   OUTPUT => root.value

//   if root.right is not null
//     preOrder(root.right)

  preOrder(root) {

    console.log(root.value);

    // while (root) {
      if (root.left !== null) {
        preOrder(root.left)
      }
      if (root.right !== null) {
        preOrder(root.right);
      }
    // }
  }
  
}

```
