class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex){
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(vertex1, vertex2, weight){
    this.adjacencyList[vertex1].push({node: vertex2, weight})
    this.adjacencyList[vertex2].push({node: vertex1, weight})
  }
}

const w = new WeightedGraph();

w.addVertex('A')
w.addVertex('B')
w.addVertex('C')


w.addEdge('A', 'B', 10)
w.addEdge('C', 'A', 15)

console.log(w.adjacencyList);