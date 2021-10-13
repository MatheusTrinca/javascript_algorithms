class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return true;
  }
  pop() {
    if (!this.length) {
      return undefined;
    }
    let current = this.head;
    let pre = this.head;
    while (current.next) {
      pre = current;
      current = current.next;
    }
    pre.next = null;
    this.tail = pre;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  get(index) {
    if (!this.head || index >= this.length || index < 0) return undefined;
    let current = this.head;
    let curIndex = 0;
    while (curIndex !== index) {
      current = current.next;
      curIndex++;
    }
    return current.val;
  }

  shift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return true;
  }

  // 0, 1, 2, 3
  insert(index, value) {
    if (index > this.length || index < 0) return false;
    if (index === this.length) {
      return this.push(value);
    }
    if (index === 0) {
      return this.shift(value);
    } else {
      const newNode = new Node(value);
      let prev = this.head;
      let current = prev;
      let curIndex = 0;
      while (curIndex !== index) {
        prev = current;
        current = current.next;
        curIndex++;
      }
      prev.next = newNode;
      newNode.next = current;
    }
    this.length++;
    return true;
  }

  rotate(rotation) {
    if (!this.head || typeof rotation !== 'number') return null;
    let prevHead = this.get(0);
    let prevTail = this.get(this.length - 1);
    let newHeadIndex = (this.length + rotation) % this.length;
    // new head is moved to 0 + newHeadIndex
    let headNode = this.get(newHeadIndex);
    // new tail is moved to this.length - 1 + newHeadIndex
    let tailIndex = newHeadIndex - 1;
    let tailNode = this.get(tailIndex);

    this.head = headNode;
    this.tail.next = prevHead;

    this.tail = tailNode;
    this.tail.next = undefined;
    console.log(this);
    return this;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) return false;
    let current = this.head;
    let curIndex = 0;
    while (curIndex !== index) {
      current = current.next;
      curIndex++;
    }
    current.val = value;
    return true;
  }

  show() {
    let current = this.head;
    let index = 0;
    const result = [];
    while (index < this.length) {
      result.push({ index: index, value: current.val });
      current = current.next;
      index++;
    }
    return result;
  }
}

const ssl = new SinglyLinkedList();

ssl.push(0);
ssl.push(1);
ssl.push(2);
ssl.push(3);

ssl.set(1, 1.5);

console.log(ssl.show());
