class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {}

  // traverse(){
  //   let current = this.head;
  //   while(current){
  //     console.log(current.value);
  //     current = current.next;
  //   }
  // }
}

const list = new SinglyLinkedList();
list.push(4);
list.push(5);
console.log(list);
