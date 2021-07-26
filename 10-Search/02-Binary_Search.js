function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let middle = 0;
  while (left <= right) {
    middle = Math.round((left + right) / 2);
    if (value === arr[middle]) return middle;
    if (value < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}
