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

  // Add no final
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

  // Remove do final
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

  // Remove do Inicio
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

  // Add no Inicio
  unshift(value) { 
    const newNode = new Node(value)
    if(!this.head) {
      this.tail = newNode;
    }
    newNode.next = this.head
    this.head = newNode
    this.length++;
    return this;
  }

  // Traz o valor do nó que está no indice passado
  get(index){
    if(index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0
    while(counter !== index){
      current = current.next;
      counter++;
    }
    return current;
    // for(let i = 0; i < this.length; i++){
    //   if(index === i){
    //     return current.value;
    //   }
    //   current = current.next;
    // }
  }

  // Muda o valor de um nó na lista, dado um indice
  set(index, value){
    let foundNode = this.get(index);
    if(!foundNode) return false;
    foundNode.value = value;
    return true;
  }

  // add um nó em uma posição específica
  insert(){}
}
  
const list = new SinglyLinkedList();
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));

console.log(list.get(1));
console.log(list.set(1, 80));
console.log(list.get(1));

// console.log(list.unshift(4))
// console.log(list.unshift(5))
// console.log(list.unshift(6))

// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);


// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());