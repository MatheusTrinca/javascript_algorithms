class Node {
  constructor(value){
    this.value = value;
    this.next = null
  }
}

// LIFO
class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0
  }

  push(value){
    const newNode = new Node(value);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }
    return ++this.size
  }

  pop() {
    if(!this.first) return null;
    let temp = this.first;
    if(this.size === 1){
      this.last = null
    }
    this.first = this.first.next
    temp.next = null;
    this.size--;
    return temp
  }
}

const stack = new Stack();

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(8)
stack.pop()
console.log(stack);