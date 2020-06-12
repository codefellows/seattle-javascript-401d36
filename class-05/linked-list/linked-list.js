'use strict';

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
}

module.exports = LinkedList;