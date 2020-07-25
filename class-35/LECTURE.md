# Class 35 Graphs

## Review

- Linked Lists => Queues => Stacks
- Trees
  - Seperated very subtled by it's non-circular nature, from graphs.
  - this is a big problem in traversal.
- Hashmaps
- Graphs
  - By nature funstions very differently from a tree.

## What is a graph

- A collection of nodes ( or a vertex ), that are seperated by edges ( but not all nodes need to have edges ).
  - Because this structure is not recursize ( a structure whos pieces make up smaller versions of itself. ).

## Terminology

- Vertex: A "node" for a graph, it the data object which contains a value ( it can have 0 or more neightbors ).
  - Whats seperates this from other nodes, is there's no longer a next
  - Island
- Edge: A connection between two nodes or vertices.
- Cyclical: nodes that have edges that points to itself.
- Direction: edges that specify a path to node, instead of a general connection.
- Neighbor: An adjacent node in a graph ( share an edge )
- Degree: the number edges connected to a vertex.
- Weight: A numerical value assigned to an edge. ( for whatever purpose you need ).

## Directed vs Non-Directed

- Directed
  - Edge Node will be directed to another node specifically.
- Undirected
  - Nodes don't have a direction to their edges

## Complete vc Connected vs Disconnected Graphs

- Complete: a graph with all vertices containing an edge to all other vetices.
- Connected: All nodes have at least one edge.
- Disconnected: graph with islands is just refered as a disconnected graph.

## Cyclical vs Acyclical

- acyclical: a directed graph that does not contains that will lead back to itself
  - These are also know as trees!
- Cyclical: A graph which contains nodes with edges that lead back to itelf

## Vertex representations

- Adjacency list:
  - often a linked list / array / hashmap of vertices.
    - A structure that contains all of a graphs nodes.
    - Hashmap: this will contain the indices for our vertices.

## Weighted Graph

- a graph that contains a numerical value on its edges
- No specifi use case is pre-scribed by the structure.

## Traversals

- Looking at all values within the structure.
- We're in luck, these are fairly similar to tree traversals.
- different underlying data structure give us the ability to traverse with different methods

### Breadth First

- queue: allows us to view vertices and edges form the top level down.
  - take in a node that is our "root" or the place to start our traversal.
    - Enque his node into our queue
    - As long as the queue has things inside?
      - Check the neighbors of the next item to be Dequeued ( the node we just enqueuse)
    - Items that are dequeed need to be marked as viewed ( we are going to do this with another structure ). I'l be using a javascript set
    - only Add children to the queue that haven't been seen.

### Depth First

- stack: allows use to push values to the bottom, and start from the furthest.
  - Similar process, but now implementings a stack.
    - Push root onto stack, add root to visisted Vertex list
    - check the top of the stack for neightbors
    - loop through neighbors and push onto stack.
      - while the top of stack still has neighbors and stack has vertices, check and iterate.


```js

// we have some new Classes!!

class Vertex {
  constructor(value) {
    this.value = value; // any value
  }
}

class Edge {
  constructor(vertex) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constuctor() {
    this.list = new Map(); // contain all of the vertices in our graph
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.list.set(vertex, []);
  }

  addEdge(startVertex, endVertex) {
    if (!this.list.has(startVertex) || !this.list.has(endVertex)) {
      console.log('Invalid Vertices');
    }

    const edges = this.map.get(startVertex);
    edges.push(endVertex);
  }

}

```