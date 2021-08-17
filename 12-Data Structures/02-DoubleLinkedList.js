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

  get(index) {
    if(index < 0 || index >= this.length) return null;
    let current = this.head;
    let count = 0;
    if(index <= this.length / 2){
      while(count !== index){
        current = current.next;
        count++
      }
    }else {
      current = this.tail;
      count = this.length - 1
      while(count !== index){
        current = current.prev;
        count--
      }
    }
    return current
  }

  set(index, value){
    const foundNode = this.get(index);
    if(!foundNode) return null;
    foundNode.value = value;
    return foundNode;
  }

  insert(index, value) {
    if(index < 0 || index > this.length) return null;
    if(index === this.length) return this.push(value);
    if(index === 0) return this.unshift(value);
    const newNode = new Node(value)
    const beforeNode = this.get(index - 1);
    const afterNode = prevNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if(index < 0 || index >= this.length) return null;
    if(index === this.length - 1) return this.pop();
    if(index === 0) return this.shift();
    const removeNode = this.get(index);
    const afterNode = removeNode.next;
    const beforeNode = removeNode.prev;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    //removedNode.prev.next = removeNode.next;
    //removedNode.next.prev = removeNode.prev
    removeNode.next = null;
    removeNode.prev = null
    this.length--;
    return true;
  }

  

}

const list = new DoubleLinkedList();

list.push(1)
list.push(2)
list.push(3)
list.push(5)
list.remove(3)

console.log(list);