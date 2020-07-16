# Class 16

## Recap of modules

  week 1: Node Calisthentics.
  week 2: Built an express server, is a RESTful
  week 3: Authentication system that sits in our Express Server.
  week 4: Event Driven Programming -> distributed system architecture.

## Midterms are here

- Think about some ideas that work well as a REST API.
  - Needs some sort of Auth.
  - Don't spend tons of time on a UI.  You're only graded on the API itself.
- Project Examples:
  - Integration into a already supported platform.
    - Slack bot, slack automation / Discord.
    - Spotify integration.
  - Saving something to cloud storage ( music, images, CMS style content )
  - Manages config files ( JSON / markdown ).
  - Integrating other Cloud APIs ( Pokeapi, Geolocation Data ).

## Warm Up

- Writing a function that can take in a Binary Tree, and returns the total number of leaves in that tree?
  - Leaf: Node in a tree that has 0 children.
  - Focus on an Algorithm :)

- Dave and Paul:
  - Traverse the tree (preOrder)
  - Add a counter
  - conditional logic
    - if (!root.left && !root.right)
      - increment counter
    - recursively call (preOrder) on left
    - recursively call (preOrder) on right
  - return counter value.

- David and Ashley
  - used postOrder to get all the way to a leaf.
  - Where to put the counter matters.

```js

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
  // check for root.left and root.right
    // if none, we have a leaf
  if (!root.left && !root.right) {
    console.log('add one');
    count += 1;
  }

  // if there is a root.left
    // call function on root.left
  console.log(count);
  if (root.left) {
    countLeaves(root.left, count);
  }

    // if there is a root.right
      // call function on root.right
  if (root.right) {
    countLeaves(root.right, count);
  }
  return count;
}

const tree = new Tree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);

countLeaves(tree.root, 0);

```

## Event Driven Programming

- What is Event Programming?
  - We've kind of been this most of our courses:
    - A machine responds to an event:
      - `window.addEventListener('DOMContentLoaded', someCallback)`
        - We've made a function that respond to the DOMContentLoaded event.
      - `app.get('/somePath', someCallback)`
- Now we are adding a specific design pattern to our events, Observer pattern
  - Often called Pub/Sub.
  - There is one "object", called the subject which publishes events.
  - There is one or more 'objects', called observers which listen for published events and respond.
  - What differentiates this design from our old ones
    - Where responding with muliple "observers" / "subscribers".
    - We can define our own proprietary events.
- Node was created with asynchronicity in mind, and as such has a event creation / handling library (called events)

DEMO:

- See typed demo folder
