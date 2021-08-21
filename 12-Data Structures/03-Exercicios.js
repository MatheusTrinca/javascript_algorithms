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
    if(this.head === null) return undefined;
    let current = this.head
    if(this.length === 1) {
      this.head = null;
      this.tail = null
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      current.next = null
    }
    this.length--
    return current;
  }

  set(index, value) {
    // Get
    if(this.length === 0) return false;
    if(index < 0 || index >= this.length) return false;
    let current = this.head;
    let count = 0
    if(index >= this.length / 2){
      current = this.tail;
      count = this.length -1
      while(index !== count){
        current = current.prev;
        count--
      }
    } else{
      while(index !== count){
        current = current.next;
        count++
      }
    }
    // End of Get
    current.val = value;
    return true;
  }

  get(index) {
    if(this.length === 0) return null;
    if(index < 0 || index >= this.length) return null;
    let current = this.head;
    let count = 0
    if(index >= this.length / 2){
      current = this.tail;
      count = this.length -1
      while(index !== count){
        current = current.prev;
        count--
      }
    } else{
      while(index !== count){
        current = current.next;
        count++
      }
    }
    return current;
  }

  pop() {
    if(this.head === null) return undefined;
    let current = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    }else{
      this.tail = current.prev;
      this.tail.next = null;
      current.prev = null
    }
    this.length--
    return current;
  }

  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    let removeNode = this.get(index);
    let prevNode = removeNode.prev;
    let nextNode = removeNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removeNode.prev = null;
    removeNode.next = null;

    this.length--;
    return removeNode
  }

  insert(index, value) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.unshift(value);
    if(index === this.length - 1) return this.push(value);
    let newNode = new Node(value);
    let beforeNode = this.get(index - 1)
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = beforeNode;
    this.length++;
    return true
  }

  reverse(){
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let nextNode = null;
    let prevNode = null;

    while(currentNode !== null) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        currentNode.prev = nextNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    return this;
}
}
