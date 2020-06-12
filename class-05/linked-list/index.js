'use strict';


// const LinkedList = require('./linked-list.js');
// const Node = require('./node.js);

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse() {
    let current = this.head; // this will be a node eventually

    while (current) {
      console.log(current.value);
      // here is where some magic
      current = current.next;
    }
  }

  insert() {

  }

  toString() {

  }

  inclues() {

  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const linkedList = new LinkedList();
const myFirstNode = new Node('Jacob');
const two = new Node(2);
const three = new Node(3);

linkedList.head = myFirstNode;
linkedList.head.next = two;
linkedList.head.next.next = three;

linkedList.traverse();
