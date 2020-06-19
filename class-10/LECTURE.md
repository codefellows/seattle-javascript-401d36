# DSA #2 Stacks and Queues

LinkedLists are still relevent, today we are adding behaviors to turn linked lists into a stack or a queue.
- We are abstracted linked lists into something new.

## Stack

- It's still a sequence of Node, the Nodes still point in a single direction.
- We're no longer using methods like append, or properties head.

### new terms

- Push: The only way to add something to a stack, set the new thing on the Top.
- Pop: The only way to remove things, we take a Node from the Top.
- Top: This is the Node that was last pushed, the first thing to be popped, the very top of our stack.
- isEmpty: Is there anything in the stack (true or false).
- Peek: what is on the top, returning the Top item.

We call this behavior FILO (first in last out) / LIFO (last in first out).

```js

// PseudoStack
const stack = [1, 2, 3];

let top = stack.pop(0);

```

### Push method 0(1) space and time
- How do we implement a Push
  - Create a new node
  - Assign new Node.next to stack.Top
  - reassign stack.Top to be new Node.

```js

class Node() {
  constructor(value) {
    this.value = value;
    this.next = next;
  }
}

class Stack() {
  constructor() {
    this.Top = null;
  }

  // define stack like things down here
  peek() {

  }

  push() {
    this.length += 1;

  }

  pop() {

  }

  isEmpty() {

  }
}

function Push(value) {

  // important to realize this node is fresh and has a null next value (no possibility for recursive artifacts)
  let newNode = new Node(value);

  newNode.next = this.Top;
  this.Top = newNode;
}
```

### Pop method O(1)

- Doing the reverse, tacking something off the stack.
  - grab top value
  - reassign Top to the next value of Top
  - pass Top value back

```js

function Pop() {
  let value = this.Top;
  value.next = null;
  this.Top = this.Top.next;
  return value;
}

```

### Peek method

- return the top value from the stack
  - return Stack.Top;

### isEmpty

- return true or false depending on stack Top;
  - return this.TOP === null

## Queue

- Same defintion: a sequence of Nodes, what sets this aprt from stacks is the FIFO / LILO.
  
###  Terminology

    - Enqueue: This is the only way we add things to a queue, starts on the left.
    - Dequeue: This is the way we remove things, removes items from the right.
    - Front: Front is the right side of the queue, the next item to be removed from the queue.
    - Back: rear of the queue, on the left side. the last item that to be removed.
    - Peek: same as a stack, looking at the next things to be removed (front).
    - isEmpty: returns whether the queue has any nodes in it(front).

### Enqueue

- create a new node
  - make the rear the new node
  - rear node next gets new node.
  - assign rear to the new node.

```js

function enqueue(value) {

  // create our node from a new value;
  let newNode = new Node(value);

  // make the (hopefully) null rear next value equal to the new node
  this.rear.next = newNode;


  // reassign the rear of our queue to the new Node.
  this.rear = newNode;
}
```

### Dequeue 

- get Node from front
- front = front.next
- reassign Node.next to be null
- return our Node

### Peek

- return this.front


### isEmpty

- return !!this.front (this.front === null)