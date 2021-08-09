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
    return true;
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
    return true;
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
  insert(index, value){
    if(index < 0 || index > this.length) return undefined
    if(index === 0) {
      return this.unshift(value);
    }
    if(index === this.length) {
      return this.push(value);
    }
    const newNode = new Node(value);
    const prev = this.get(index - 1);
    const temp = prev.next
    prev.next = newNode;
    newNode.next = temp
    this.length++;
    return true;
  }

  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length -1) return this.pop();
    const prev = this.get(index -1);
    const temp = prev.next;
    prev.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  //! ESTUDAR
  reverse(){
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for(var i = 0; i < this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  
  print(){
      var arr = [];
      var current = this.head
      while(current){
          arr.push(current.val)
          current = current.next
      }
      console.log(arr);
  }
}
  
const list = new SinglyLinkedList();
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
