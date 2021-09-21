class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertexName) {
    if (!this.adjacencyList[vertexName]) {
      this.adjacencyList[vertexName] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (edge) => edge !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (edge) => edge !== vertex1
    );
  }

  removeVertex(vertex) {
    for (let edge of this.adjacencyList[vertex]) {
      this.adjacencyList[edge] = this.adjacencyList[edge].filter(
        (v) => v !== vertex
      );
    }
    delete this.adjacencyList[vertex];
  }

  DFSRecursive(startingVertex) {
    const result = [];
    const visited = {};
    
    const DFS = (vertex) => {
      if(!vertex){
        return null;
      }
      visited[vertex] = true
      result.push(vertex)
      this.adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          return DFS(neighbor)
        }
      })
    }
    DFS(startingVertex)
    return result;
  }

  DFSInteractive(startingVertex) {
    const result = [];
    const stack = [startingVertex];
    const visited = {};
    visited[startingVertex] = true;
    let vtx;
    while(stack.length){
      vtx = stack.pop();
      result.push(vtx);
      this.adjacencyList[vtx].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true
          stack.push(neighbor);
        }
      })
    }
    return result
  }

  BFSInteractive(startingVertex) {
    const result = [];
    const queue = [startingVertex];
    const visited = {};
    visited[startingVertex] = true;
    let vtx;
    while(queue.length){
      vtx = queue.shift();
      result.push(vtx);
      this.adjacencyList[vtx].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true
          queue.push(neighbor);
        }
      })
    }
    return result
  }
}
const g = new Graph();

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

console.log(g.DFSInteractive('A'));
console.log(g.BFSInteractive('A'));