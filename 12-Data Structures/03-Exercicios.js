class Node{
  constructor(val){
    this.val = val
    this.next = null;      
    this.prev = null;      
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0
  }

  push(value){
    let newNode = new Node(value)
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  unshift(value) {
    let newNode = new Node(value)
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode
    }else{
      this.head.prev = newNode
      newNode.next = this.head;
      this.head = newNode
    }
    this.length++
    return this
  }

  shift() {
  }
}
