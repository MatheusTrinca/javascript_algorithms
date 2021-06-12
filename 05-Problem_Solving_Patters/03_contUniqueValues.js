// DOIS POINTERS DO MESMO LADO
function countUniqueValues(arr) {
  count = 0;
  for (let i = 0, j = i + 1; j < arr.length; i++, j++) {
    count = 1;
    if (arr[i] !== arr[j]) {
      count++;
    }
  }
  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));
