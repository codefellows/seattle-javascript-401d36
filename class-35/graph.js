'use strict';

const util = require('util');

class Vertex {
  constructor(value) {
    this.value = value; // any value
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencylist = new Map(); // contain all of the vertices in our graph
  }



  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencylist.set(vertex, []);

    return vertex;
  }



  addEdge(startVertex, endVertex) {
    if (!this.adjacencylist.has(startVertex) || !this.adjacencylist.has(endVertex)) {
      console.log('Invalid Vertices');
    }

    const edges = this.adjacencylist.get(startVertex);
    const edge = new Edge(endVertex, 0);
    edges.push(edge);
  }



  getNeighbors(vertex) {
    if (!this.adjacencylist.has(vertex)) {
      console.log('Invalid Vertex');
    }

    return [...this.adjacencylist.get(vertex)];
  }

  // looks at all vertices starting at the top level going down.
  breadthFirst(startVertex) {

    const queue = [];
    const visitedNodes = new Set(); // this is basically an array of unique values;

    queue.push(startVertex);
    visitedNodes.add(startVertex);

    while (queue.length) {
      const current = queue.shift(); // the new pop()!!

      console.log(current);
      const neighbors = this.getNeighbors(current);

      // check if there are neighbors that haven't been visited
      for (let edge of neighbors) {
        const vertex = edge.vertex;

        if (visitedNodes.has(vertex)) {
          continue;
        } else {
          visitedNodes.add(vertex);
        }

        // push each edge that is adjacent to current into the queue.
        queue.push(vertex);
      }

    }

  }

  // performs an operatoin starting with furthest level of vertices from the 'start' vertex
  depthFirst(startVertex) {

    const stack = [];
    const visitedNodes = new Set(); // this is basically an array of unique values;

    stack.push(startVertex);
    visitedNodes.add(startVertex);

    let neighbors = this.getNeighbors(startVertex);

    // as long as neighbors exists at the top of the stack, check if they are visited and 
    while (neighbors.length) {

      // check if there are neighbors that haven't been visited
      for (let edge of neighbors) {
        const vertex = edge.vertex;

        if (!visitedNodes.has(vertex)) {
          visitedNodes.add(vertex);
          stack.push(vertex);
        }
      }

      // grab new children from the top of the stack
      neighbors = this.getNeighbors(stack[stack.length - 1]);
    }

    // now our stack is full and we can pop off values in order to get values in depth first order
    while (stack.length) {
      console.log(stack.pop());
    }

    return;
  }

  getNodes() {
    return this.adjacencylist;
  }
}

const graph = new Graph();

const one = graph.addVertex(1);
const two = graph.addVertex(2);
const four = graph.addVertex(4);
const six = graph.addVertex(6);
const seven = graph.addVertex(7);
const eight = graph.addVertex(8);
const ten = graph.addVertex(10);


graph.addEdge(one, two);
graph.addEdge(one, four);
graph.addEdge(two, four);
graph.addEdge(four, six);
graph.addEdge(six, eight);
graph.addEdge(six, ten);
graph.addEdge(seven, ten);


// console.log(util.inspect(graph, false, null, true));
// console.log(util.inspect(graph.breadthFirst(one), false, null, true));
console.log('*********')
graph.breadthFirst(one);
// graph.breadthFirst(seven);
console.log('**********');
graph.depthFirst(one);
// console.log(graph.getNeighbors(one));
