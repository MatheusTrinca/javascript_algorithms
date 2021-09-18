class Graph {
  constructor() {
    this.adjancecyList = {};
  }

  addVertex(vertexName) {
    if (!this.adjancecyList[vertexName]) {
      this.adjancecyList[vertexName] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjancecyList[vertex1].push(vertex2);
    this.adjancecyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjancecyList[vertex1] = this.adjancecyList[vertex1].filter(
      (edge) => edge !== vertex2
    );
    this.adjancecyList[vertex2] = this.adjancecyList[vertex2].filter(
      (edge) => edge !== vertex1
    );
  }

  removeVertex(vertex) {
    for (let edge of this.adjancecyList[vertex]) {
      this.adjancecyList[edge] = this.adjancecyList[edge].filter(
        (v) => v !== vertex
      );
    }
    delete this.adjancecyList[vertex];
  }
}
const graph = new Graph();

graph.addVertex('Tokyo');
graph.addVertex('Dallas');
graph.addVertex('Aspen');
graph.addEdge('Tokyo', 'Dallas');
graph.addEdge('Tokyo', 'Aspen');
//graph.removeEdge('Tokyo', 'Dallas');
graph.removeVertex('Tokyo');

console.log(graph.adjancecyList);
