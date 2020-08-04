# Class 42

## Warm Up

- Traversal Practice (looking at all nodes, from a starting position)
- Linked Lists

```js

```

- Trees

```js
// Paul and Dave

/**
 * Check the root node
 * if children exists
 *   add to an array(stack)  
 *   recursive check for value (left and right)
 * else pop and add to results
 * return the array
*/

// is this a node??
function treeTraverse(root) {

  let returnArray = [];  // we know we want to return so we create one!

  let stack = [];

  if (root === null) {

    console.log('no node given');
    return returnArray;

  }
  stack.push(root);

  while(stack.length) {
    if (root.left) {
      stack.push(root.left.value);
    }
    if (root.right) {
      stack.push(root.right.value);
    }

    // this should always happen at the bottom
    root = stack.pop();
  }
  // recursively or iteratively, inOrder
  // const recursiveHelper = (node, array) => {
  //   if(node.left) {
  //     recursiveHelper(node.left, array);
  //   }

  //   array.push(node.value);

  //   if(node.right) {
  //     recursievHelper(node.right, array);
  //   }
  // }

  recursiveHelper(root, returnArray);

  return returnArray; //... and return the array
}


```

- Graph (directed)

```js

```

## Review React Native

- Our development environment
- Developer accounts
  - Google is $25
  - Apple is $99
- Expo is build tool that handles ALL builds directly.
  - Getting something usable running as quickly as possible
  - the output is really not usable for deployment ( only works with expo and expo-client ).

## Deploying our Apps

- Getting our code ready to send to Play Store / App Store
- The typical user, requires a build in either java or objective
  - We'll cover getting the source code today.
- Publishing on Expo.
  - Simplest way to let other people use your native. Requirement must have an expo and be signed in.
    - `expo publish`
    - User must download expo client
    - Find your app in Expo, or use a url.
  - Next we want to prep for upload to app stores
    - cocoaPods for ios (for mac users)
      - not having cocoapods
      - `sudo gem install cocoapods`
  - Running native code on your phone (without expo)
    - Either xcode or android (depending on your phone).
    - Android:
      - make sure you opened android studio and have the sdk installed
      - licences are agreed to.
        - from spash screen
          - go to SDK Manager > android SDK > select SDK tools tab > install google play license library
      - Activate USB debugging.
        - Find setting > About phone / Phone info > software information > tab build number 7 times.
        - Developer options should be available
          - Turn on usb debugging.
        - If sdk is not found (on a mac): add `local.properties` file to android directory
          - `sdk.dir=/Users/MACUSER/Library/Android/sdk/`