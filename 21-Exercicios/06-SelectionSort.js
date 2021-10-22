function selectionSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (v1, v2) => v1 - v2;
  }
  let min;
  for (i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[min], arr[j]) > 0) {
        min = j;
      }
    }
    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selectionSort([4, 36, 7, 1, 6, 8, 2]));
