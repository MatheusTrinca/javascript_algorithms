class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// --------------------------

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

  pop() {
    if(!this.head) return undefined
    let current = this.head;
    let pre = current;
    while(current.next !== null){
      pre = current;
      current = current.next
    }
    pre.next = null;
    this.tail = pre;
    this.length--;
    if(this.length === 0){
      this.tail = null;
      this.head = null;
    }
    return current;
  }

  shift() {
    if(!this.head) return undefined
    let current = this.head;
    this.head = current.next
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    return current;
  }
}

const list = new SinglyLinkedList();
// console.log(list.push(1));
// console.log(list.push(2));
// console.log(list.push(3));

// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);


// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());


console.log(list);
