'use strict';

class HashMap {

  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let charArray = key.split('');
    let hashSum = charArray.reduce((total, char) => {
      return total + char.charCodeAt(0);
    }, 0) * 599;
    let HashIndex = hashSum % this.size;
    return HashIndex;
  }

  add(key, value) {
    let hash = this.hash(key);
    if (!this.buckets[hash]) {
      this.buckets[hash] = new LinkedList();
    }

    // this is important based on your langauges capapbilities.
    let entry = { [key]: value };

    // dynamically add it to our linked list
    this.buckets[hash].add(entry);
  }

  get() {

  }

  contains() {

  }
}

/*
  Node and Linked List classes for use within hash structures
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}


let map = new HashMap(1024);
map.add("Jacob", "instructor");
map.add("Garhett", "awesome");
map.add('Alistair', 'ta');

map.buckets.forEach((bucket, index) => {
  console.log(index, bucket.values());
});