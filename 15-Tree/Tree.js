// Node -> Tem apenas 1 Pai, mas pode ter varios Filhos
// Root -> topo
// Child -> Filho de um Node 
// Parent -> Pai de um Node
// Siblings -> Grupo de Filhos de um mesmo Pai
// Leaf(folha) -> Node sem Filhos
// Edge -> conexão entre 2 Nodes

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while(true){
      if(value === current.value) return undefined;
      if(value > current.value){
        if(current.right){
          current = current.right
        }else{
          current.right = newNode
          return this;
        }
      }else{
        if(current.left){
          current = current.left
        }else{
          current.left = newNode
          return this;
        }
      }
    }
  }

  find(value) {
    if(!this.root) return false;
    let current = this.root;
    while(current){
      if(value > current.value){
          current = current.right
      }else if (value < current.value){
          current = current.left
      }else{
        return true
      }
    }
    return false;
  }

  BFS() {
    let node = this.root;
    const queue = [];
    const visited = [];
    queue.push(node);
    while(queue.length){
      node = queue.shift();
      visited.push(node.value)
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return visited;
  }
  
}

bst = new BinarySearchTree();

bst.insert(1)
bst.insert(1)
bst.insert(2)
bst.insert(0)
bst.insert(3)
console.log(bst.BFS());
