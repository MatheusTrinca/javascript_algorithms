class Node {
  constructor(value) {
    this.value = value;
    this.prev = null,
    this.next = null
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return true
  }

  pop(){
    if(!this.head) return undefined;
    let current = this.tail
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = current.prev;
      this.tail.next = null
      current.prev = null
    }
    this.length--;
    return current
  }

  shift() {
    if(!this.head) return undefined;
    let current = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else{
      this.head = current.next;
      this.head.prev = null;
      current.next = null
    }
    this.length--;
    return current;
  }

  unshift(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode
      newNode.next = this.head;
      this.head = newNode
    }
    this.length++;
    return true
  } 

}

const list = new DoubleLinkedList();

list.push(1)
list.push(2)
list.unshift(5)


console.log(list);