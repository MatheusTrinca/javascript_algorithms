class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.values[parentIndex] < this.values[index]) {
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this.values;
  }
  // remove
  extractMax() {
    let max = this.values[0];
    if (this.values.length > 0) {
      this.values[0] = this.values[this.values.length - 1];
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > swap)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const heap = new MaxBinaryHeap();
console.log(heap.insert(49));
console.log(heap.insert(39));
console.log(heap.insert(33));
console.log(heap.insert(18));
console.log(heap.insert(27));
console.log(heap.insert(12));
console.log(heap.insert(55));
console.log(heap.insert(1));
console.log(heap.extractMax());
console.log(heap.values);
